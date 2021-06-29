import {Component, OnDestroy, OnInit} from '@angular/core';
import {DealFacadeService} from "../../services/deal-facade.service";
import {Subject} from "rxjs";
import {Observable} from "rxjs/index";
import {IDeal} from "../../state/deal.model";
import {debounceTime, distinctUntilChanged, switchMap, takeUntil} from "rxjs/internal/operators";
import {map} from "rxjs/operators";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrls: ['./all-deals.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AllDealsComponent implements OnInit, OnDestroy {
  allDeals$ = this.facadeService.allDeals$;
  isLoading$ = this.facadeService.isLoading$;
  filteredDeals: IDeal[] | undefined;
  searchTerm$ = new Subject<string>();
  ngUnsubscribe = new Subject();

  filtersExpanded = false;

  constructor(
    private facadeService: DealFacadeService
  ) {

    // add all deals to filtered deals that are being displayed initially
    this.allDeals$
      .pipe( takeUntil(this.ngUnsubscribe) )
      .subscribe(allDeals => {
      this.filteredDeals = allDeals;
    });
    // Register search stream and replace list with filtered deals
    this.searchItems(this.searchTerm$)
      .pipe( takeUntil(this.ngUnsubscribe) )
      .subscribe(deals => {
        this.filteredDeals = [];
        this.filteredDeals.push(...deals);
    })
  }

  ngOnInit(): void {
    this.facadeService.fetchDeals(true);
  }

  searchItems(search: Observable<string>): Observable<IDeal[]>  {
    return search
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        switchMap(term => {
          return this.allDeals$.pipe(
            map(deal => {
              return this.filterByTitle(deal, term);
            })
          )
        })
      );
  }

  filterByTitle(deals: IDeal[], searchTerm: string): IDeal[] {
    return deals.filter((deal) => {
      return deal.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    });
  }

  filterBy(onSale: boolean): void {
    console.log(onSale);
    this.facadeService.fetchDeals(onSale);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
