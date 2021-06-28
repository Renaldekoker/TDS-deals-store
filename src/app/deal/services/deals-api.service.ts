import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IDealsApiService } from "./i-deals-api.service";
import { Observable } from "rxjs/index";
import { IDeal } from "../state/deal.model";
import { environment } from "../../../environments/environment";
import {map} from "rxjs/operators";
import {IServerDeal} from "../state/server-deal.model";

@Injectable({
  providedIn: 'root'
})
export class DealsApiService implements IDealsApiService {
  apiURL = environment.dealsAPI;
  constructor(
    private http: HttpClient
  ) { }

  getAllDeals(onSale?: boolean): Observable<IServerDeal[]> {
    let parameters = '';
    parameters += onSale ? `?onSale=${onSale ? 1 : 0}` : '';

    return this.http.get<IServerDeal[]>(`${this.apiURL}${parameters}`);
  }

  getDealByID(id: string): Observable<IServerDeal | undefined> {
    return this.http.get<IServerDeal>(`${this.apiURL}id=${id}`);
  }

}
