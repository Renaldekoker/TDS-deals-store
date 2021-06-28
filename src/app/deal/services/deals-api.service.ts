import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IDealsApiService } from "./i-deals-api.service";
import { Observable, of } from "rxjs/index";
import { IDeal } from "../state/deal.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DealsApiService implements IDealsApiService {
  apiURL = environment.dealsAPI;
  constructor(
    private http: HttpClient
  ) { }

  getAllDeals(storeID: number, onSale: boolean): Observable<IDeal[]> {
    let parameters = storeID || onSale ? '?' : '';
    parameters += storeID ? `storeID=${storeID}` : '';
    parameters += onSale ? `onSale=${onSale ? 1 : 0}` : '';

    return this.http.get<IDeal[]>(`${this.apiURL}${parameters}`);
  }

  getDealByID(id: string): Observable<IDeal | undefined> {
    return this.http.get<IDeal>(`${this.apiURL}id=${id}`);
  }

}
