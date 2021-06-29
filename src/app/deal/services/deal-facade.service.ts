import { Injectable } from '@angular/core';
import {DealStore} from "../state/deal.store";
import {IDealsApiService} from "./i-deals-api.service";
import {map} from "rxjs/operators";
import {DealQuery} from "../state/deal.query";
import {IDeal} from "../state/deal.model";

@Injectable({
  providedIn: 'root'
})
export class DealFacadeService {
  allDeals$ = this.query.selectAll();
  isLoading$ = this.query.selectLoading();

  constructor(
    private store: DealStore,
    private query: DealQuery,
    private apiService: IDealsApiService
  ) { }

  /*
  * Fetch deals from API, translate and set in store
  * */
  fetchDeals(onSale: boolean): void {
    this.apiService.getAllDeals(onSale).pipe(
      map(response => {
        return response.map(deal => {
          return {
            id: deal.dealID,
            title: deal.title,
            thumb: deal.thumb,
            price: deal.normalPrice,
            salePrice: deal.salePrice,
            isOnSale: deal.isOnSale === '1',
            savings: deal.savings,
            storeID: deal.storeID
          } as IDeal
        });
      })
    ).subscribe(deals => this.store.set(deals))
  }
}
