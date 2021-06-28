import { Injectable } from '@angular/core';
import {IDealsApiService} from "./i-deals-api.service";
import {IDeal} from "../state/deal.model";
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class MockDealsApiService implements IDealsApiService {
  private readonly allDeals: IDeal[];
  constructor() {
    this.allDeals = [
      {
        id: "EX0oH20b7A1H2YiVjvVx5A0HH%2F4etw3x%2F6YMGVPpKbA%3D",
        title: "Thief: Deadly Shadows",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/6980/capsule_sm_120.jpg?t=1592493801",
        normalPrice: 8.99,
        salePrice: 0.98,
        isOnSale: true,
        savings: 89.098999
      },
      {
        id: "z4El8C19yCEHrk1%2ByEedebThQVbblI7H0Z%2BAmxgZiS8%3D",
        title: "Just Cause 2",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/8190/capsule_sm_120.jpg?t=1593180404",
        normalPrice: 14.99,
        salePrice: 1.49,
        isOnSale: true,
        savings: 90.060040
      },
      {
        id: "TlzUCY9p3Sq1bY%2Br4aGWO5Cs2UxE1lYnuQD05gxNwIM%3D",
        title: "Thief II: The Metal Age",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/8190/capsule_sm_120.jpg?t=1593180404",
        normalPrice: 6.99,
        salePrice: 0.97,
        isOnSale: true,
        savings: 86.123033
      }
    ]
  }

  getAllDeals(): Observable<IDeal[]> {
    return of(this.allDeals);
  }

  getDealByID(id: string): Observable<IDeal  | undefined> {
    return of(this.allDeals.find(d => d.id === id));
  }
}
