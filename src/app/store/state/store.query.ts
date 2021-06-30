import { Injectable } from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {StoreState, StoreStore} from "./store.store";

@Injectable({ providedIn: 'root' })
export class StoreQuery extends QueryEntity<StoreState> {
  constructor(protected store: StoreStore) {
    super(store);
    this.createUIQuery();
  }
}
