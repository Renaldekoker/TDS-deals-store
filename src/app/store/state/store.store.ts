import { Injectable } from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {IStore, IStoreUI} from "./models/store.model";


export interface StoreState extends EntityState<IStore> {}
export interface StoreUIState extends EntityState<IStoreUI> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'store' })
export class StoreStore extends EntityStore<StoreState> {

  constructor() {
    super();
    this.createUIStore();
  }
}
