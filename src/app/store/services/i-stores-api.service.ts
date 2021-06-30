import {Observable} from "rxjs";
import {IStore} from "../state/models/store.model";

export abstract class IStoresApiService {
  protected constructor() { }

  /*
  * Return all deals and filter by optional filter params
  * */
  abstract getAllStores(): Observable<IStore[]>;
}

