import {ID} from '@datorama/akita';

export interface IDeal {
  id: ID | null,
  title: string | null,
  thumb: string | null,
  price: string | null;
  salePrice: string | null,
  isOnSale: boolean | null,
  savings: string | null,
  storeID: string | null
}

export interface IDealUI {
  isLoading: boolean;
}
