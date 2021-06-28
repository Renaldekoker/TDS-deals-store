import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/index";
import {IDeal} from "../../state/deal.model";
import {DealFacadeService} from "../../services/deal-facade.service";

@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrls: ['./all-deals.component.scss']
})
export class AllDealsComponent implements OnInit {
  allDeals$ = this.facadeService.allDeals$;

  constructor(
    private facadeService: DealFacadeService
  ) { }

  ngOnInit(): void {
    this.facadeService.fetchDeals();
  }

}
