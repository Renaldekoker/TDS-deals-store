import {Observable} from "rxjs";
import {IServerDeal} from "../state/server-deal.model";

export abstract class IDealsApiService {
  protected constructor() { }

  /*
  * Return all deals and filter by optional filter params
  * */
  abstract getAllDeals(onSale: boolean): Observable<IServerDeal[]>;
  abstract getDealByID(id: string): Observable<IServerDeal  | undefined>;
}

