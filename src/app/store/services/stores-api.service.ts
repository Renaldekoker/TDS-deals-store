import { Injectable } from '@angular/core';
import {IStoresApiService} from "./i-stores-api.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IStore} from "../state/models/store.model";
import {map} from "rxjs/operators";
import {ServerStoreModel} from "../state/models/server-store.model";

@Injectable({
  providedIn: 'root'
})
export class StoresApiService implements IStoresApiService {
  apiURL = environment.storesAPI;
  constructor(
    private http: HttpClient
  ) { }

  getAllStores(): Observable<IStore[]> {
    return this.http.get<ServerStoreModel[]>(`${this.apiURL}`)
      .pipe(
        map(stores =>
          stores.map(s => {
            return {storeName: s.storeName, id: s.storeID}
          })
        )
      )
  }
}
