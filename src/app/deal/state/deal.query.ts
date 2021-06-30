import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DealState, DealStore } from "./deal.store";

@Injectable({ providedIn: 'root' })
export class DealQuery extends QueryEntity<DealState> {
  constructor(protected store: DealStore) {
    super(store);
    this.createUIQuery();
  }

  /*
  * Count amount of deals a store has
  * */
  countStoreDeals(storeID: string): number {
    return this.getAll().filter(d => d.storeID === storeID).length;
  }
}
