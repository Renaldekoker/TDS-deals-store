import {ID} from '@datorama/akita';

export interface IStore {
  id: ID,
  storeName: string,
}

export interface IStoreUI {
  isLoading: boolean;
}
