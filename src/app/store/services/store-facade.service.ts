import { Injectable } from '@angular/core';
import {StoreStore} from "../state/store.store";
import {StoreQuery} from "../state/store.query";
import {IStoresApiService} from "./i-stores-api.service";
import {ID} from "@datorama/akita";
import {DealQuery} from "../../deal/state/deal.query";

@Injectable({
  providedIn: 'root'
})
export class StoreFacadeService {
  allStores$ = this.query.selectAll();
  isLoading$ = this.query.selectLoading();
  isEmpty = !this.query.hasEntity();
  constructor(
    private store: StoreStore,
    private query: StoreQuery,
    private dealQuery: DealQuery,
    private apiService: IStoresApiService
  ) { }

  async fetchAllStores() {
    // only fetch stores if empty
    if (this.isEmpty) {
      this.store.set(await this.apiService.getAllStores().toPromise());
    }
  }

  getStoreName(storeID: ID): string | undefined {
    return this.query.getEntity(storeID)?.storeName;
  }

  getNumberOfDeals(storeID: string): number {
    return this.dealQuery.countStoreDeals(storeID);
  }
}
