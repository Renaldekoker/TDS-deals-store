import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IDealsApiService } from "./i-deals-api.service";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import {IServerDeal} from "../state/models/server-deal.model";
import {IServerDealDetail} from "../state/models/server-deal-detail.model";

@Injectable({
  providedIn: 'root'
})
export class DealsApiService implements IDealsApiService {
  apiURL = environment.dealsAPI;
  constructor(
    private http: HttpClient
  ) { }

  getAllDeals(onSale: boolean): Observable<IServerDeal[]> {
    let parameters = `?isOnSale=${onSale ? 1 : 0}`;

    return this.http.get<IServerDeal[]>(`${this.apiURL}${parameters}`);
  }

  getDealByID(id: string): Observable<IServerDealDetail | undefined> {
    return this.http.get<IServerDealDetail>(`${this.apiURL}?id=${id}`);
  }

}
