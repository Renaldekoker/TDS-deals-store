import {Observable} from "rxjs";
import {IServerDeal} from "../state/models/server-deal.model";
import {IServerDealDetail} from "../state/models/server-deal-detail.model";

export abstract class IDealsApiService {
  protected constructor() { }

  /*
  * Return all deals and filter by optional filter params
  * */
  abstract getAllDeals(onSale: boolean): Observable<IServerDeal[]>;
  abstract getDealByID(id: string): Observable<IServerDealDetail  | undefined>;
}

