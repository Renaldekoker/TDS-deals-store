export interface IDealDetail {
  storeID: string,
  storeName: string | undefined,
  salePrice: string,
  price: string,
  thumb: string,
  cheaperStores: ICheaperStores[],
  savings: string | undefined
}

interface ICheaperStores {
  dealID: string,
  storeID: string,
  storeName: string | undefined,
  salePrice: string,
  retailPrice: string
}
