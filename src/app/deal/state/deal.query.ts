import { Injectable } from '@angular/core';
import {EntityUIQuery, ID, QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs/index';
import {DealState, DealStore, DealUIState} from "./deal.store";

@Injectable({ providedIn: 'root' })
export class DealQuery extends QueryEntity<DealState> {
  constructor(protected store: DealStore) {
    super(store);
    this.createUIQuery();
  }

 /* selectLoadingEntity(id: ID): Observable<boolean> {
    return this.ui.selectEntity(id, 'isLoading');
  }*/
}
