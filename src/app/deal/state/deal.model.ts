import {ID} from '@datorama/akita';

export interface IDeal {
  id: ID | null;
  title: string | null;
  thumb: string | null;
  normalPrice: number | null;
  salePrice: number | null;
  isOnSale: boolean | null;
  savings: number | null,
}

export interface IDealUI {
  isLoading: boolean;
}
