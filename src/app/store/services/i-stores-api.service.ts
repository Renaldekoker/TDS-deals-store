import {Observable} from "rxjs";
import {IStore} from "../state/models/store.model";

export abstract class IStoresApiService {
  protected constructor() { }

  /*
  * Return all stores
  * */
  abstract getAllStores(): Observable<IStore[]>;
}

