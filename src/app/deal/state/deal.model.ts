import {ID} from '@datorama/akita';

export interface IDeal {
  id: ID,
  title: string,
  thumb: string,
  price: string;
  salePrice: string,
  isOnSale: boolean,
  savings: string,
  storeID: string
}

export interface IDealUI {
  isLoading: boolean;
}
