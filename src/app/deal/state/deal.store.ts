import { Injectable } from '@angular/core';
import {EntityState, EntityStore, EntityUIStore, ID, StoreConfig} from '@datorama/akita';
import {IDeal, IDealUI} from "./deal.model";


export interface DealState extends EntityState<IDeal> {}
export interface DealUIState extends EntityState<IDealUI> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'product' })
export class DealStore extends EntityStore<DealState> {

  constructor() {
    super();
    this.createUIStore();
  }
}
