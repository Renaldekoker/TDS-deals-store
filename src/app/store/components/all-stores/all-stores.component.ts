import { Component, OnInit } from '@angular/core';
import {IDeal} from "../../../deal/state/models/deal.model";
import {Observable, Subject} from "rxjs";
import {DealFacadeService} from "../../../deal/services/deal-facade.service";
import {debounceTime, distinctUntilChanged, map, switchMap, takeUntil} from "rxjs/operators";
import {StoreFacadeService} from "../../services/store-facade.service";
import {IStore} from "../../state/models/store.model";
import {ID} from "@datorama/akita";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-all-stores',
  templateUrl: './all-stores.component.html',
  styleUrls: ['./all-stores.component.scss'],
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
export class AllStoresComponent implements OnInit {
  allStores$ = this.facadeService.allStores$;
  isLoading$ = this.facadeService.isLoading$;
  filteredStores: IStore[] | undefined;
  searchTerm$ = new Subject<string>();
  ngUnsubscribe = new Subject();

  constructor(
    private facadeService: StoreFacadeService
  ) {

    // add all deals to filtered deals that are being displayed initially
    this.allStores$
      .pipe( takeUntil(this.ngUnsubscribe) )
      .subscribe(allDeals => {
        this.filteredStores = allDeals;
      });
    // Register search stream and replace list with filtered stores
    this.searchStores(this.searchTerm$)
      .pipe( takeUntil(this.ngUnsubscribe) )
      .subscribe(stores => {
        this.filteredStores = [];
        this.filteredStores.push(...stores);
      })
  }

  async ngOnInit() {
    await this.facadeService.fetchAllStores();
  }

  searchStores(search: Observable<string>): Observable<IStore[]>  {
    return search
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        switchMap(term => {
          return this.allStores$.pipe(
            map(store => {
              return this.filterByName(store, term);
            })
          )
        })
      );
  }

  filterByName(stores: IStore[], searchTerm: string): IStore[] {
    return stores.filter((store) => {
      return store.storeName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    });
  }

  getNumberOfDeals(storeID: ID): number {
    return this.facadeService.getNumberOfDeals(storeID as string);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
