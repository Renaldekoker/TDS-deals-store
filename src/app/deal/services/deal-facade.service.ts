import { Injectable } from '@angular/core';
import { DealStore } from "../state/deal.store";
import { IDealsApiService } from "./i-deals-api.service";
import { map } from "rxjs/operators";
import { DealQuery } from "../state/deal.query";
import { IDeal } from "../state/models/deal.model";
import { ID } from "@datorama/akita";
import { StoreFacadeService } from "../../store/services/store-facade.service";
import { IDealDetail } from "../state/models/deal-detail.model";

@Injectable({
  providedIn: 'root'
})
export class DealFacadeService {
  allDeals$ = this.query.selectAll();
  isEmpty = !this.query.hasEntity();
  isLoading$ = this.query.selectLoading();

  constructor(
    private store: DealStore,
    private query: DealQuery,
    private apiService: IDealsApiService,
    private storeFacade: StoreFacadeService
  ) { }

  /*
  * Fetch deals from API, translate and set in store
  * */
  async fetchDeals(onSale: boolean) {
    if (this.isEmpty) {
      let deals = await this.apiService.getAllDeals(onSale).pipe(
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
      ).toPromise();
      this.store.set(deals);
    }
  }

  getDealSavings(dealID: ID): string | undefined {
    return this.query.getEntity(dealID)?.savings;
  }

  /*
  * fetch deal detail and translate to consumable UI data
  * */
  async getDealByID(id: ID): Promise<IDealDetail | undefined> {
    await this.storeFacade.fetchAllStores();
    await this.fetchDeals(true);
    return await this.apiService.getDealByID(id as string)
      .pipe(
        map( deal => {
          if (!deal || !deal.gameInfo) {
            return undefined;
          }
          let gameInfo = deal.gameInfo;
          let cheaperStores = deal.cheaperStores;
          return {
            storeID: gameInfo.storeID,
            storeName: this.storeFacade.getStoreName(gameInfo.storeID),
            salePrice: gameInfo.salePrice,
            price: gameInfo.retailPrice,
            thumb: gameInfo.thumb,
            savings: this.getDealSavings(id),
            cheaperStores: cheaperStores.map(s => {
              return {
                storeID: s.storeID,
                storeName: this.storeFacade.getStoreName(s.storeID),
                dealID: s.dealID,
                salePrice: s.salePrice,
                retailPrice: s.retailPrice
              }
            })
          }
        })
      ).toPromise()
  }
}
