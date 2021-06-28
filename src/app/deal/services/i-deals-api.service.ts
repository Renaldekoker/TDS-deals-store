import {IDeal} from "../state/deal.model";
import {Observable} from "rxjs/index";

export abstract class IDealsApiService {
  protected constructor() { }

  /*
  * Return all deals and filter by optional filter params
  * */
  abstract getAllDeals(storeID: number, onSale: boolean): Observable<IDeal[]>;
  abstract getDealByID(id: string): Observable<IDeal  | undefined>;
}

