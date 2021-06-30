import { Injectable } from '@angular/core';
import {IDealsApiService} from "./i-deals-api.service";
import {Observable, of} from "rxjs";
import {IServerDeal} from "../state/models/server-deal.model";
import {IServerDealDetail} from "../state/models/server-deal-detail.model";

@Injectable({
  providedIn: 'root'
})
export class MockDealsApiService implements IDealsApiService {
  private readonly allDeals: IServerDeal[];
  private readonly allDealsDetails: IServerDealDetail[];
  constructor() {
    this.allDeals = [
      {
        "internalName": "DEUSEXHUMANREVOLUTIONDIRECTORSCUT",
        "title": "Deus Ex: Human Revolution - Director's Cut",
        "metacriticLink": "/game/pc/deus-ex-human-revolution---directors-cut",
        "dealID": "HhzMJAgQYGZ%2B%2BFPpBG%2BRFcuUQZJO3KXvlnyYYGwGUfU%3D",
        "storeID": "1",
        "gameID": "102249",
        "salePrice": "2.99",
        "normalPrice": "19.99",
        "isOnSale": "0",
        "savings": "85.042521",
        "metacriticScore": "91",
        "steamRatingText": "Very Positive",
        "steamRatingPercent": "92",
        "steamRatingCount": "17993",
        "steamAppID": "238010",
        "releaseDate": 1382400000,
        "lastChange": 1621536418,
        "dealRating": "9.6",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/238010/capsule_sm_120.jpg?t=1619788192"
      },
      {
        "internalName": "THIEFDEADLYSHADOWS",
        "title": "Thief: Deadly Shadows",
        "metacriticLink": "/game/pc/thief-deadly-shadows",
        "dealID": "EX0oH20b7A1H2YiVjvVx5A0HH%2F4etw3x%2F6YMGVPpKbA%3D",
        "storeID": "2",
        "gameID": "396",
        "salePrice": "0.98",
        "normalPrice": "8.99",
        "isOnSale": "1",
        "savings": "89.098999",
        "metacriticScore": "85",
        "steamRatingText": "Very Positive",
        "steamRatingPercent": "81",
        "steamRatingCount": "1670",
        "steamAppID": "6980",
        "releaseDate": 1085443200,
        "lastChange": 1621540561,
        "dealRating": "9.4",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/6980/capsule_sm_120.jpg?t=1592493801"
      },
      {
        "internalName": "JUSTCAUSE2",
        "title": "Just Cause 2",
        "metacriticLink": "/game/pc/just-cause-2",
        "dealID": "z4El8C19yCEHrk1%2ByEedebThQVbblI7H0Z%2BAmxgZiS8%3D",
        "storeID": "3",
        "gameID": "180",
        "salePrice": "1.49",
        "normalPrice": "14.99",
        "isOnSale": "1",
        "savings": "90.060040",
        "metacriticScore": "84",
        "steamRatingText": "Very Positive",
        "steamRatingPercent": "90",
        "steamRatingCount": "35296",
        "steamAppID": "8190",
        "releaseDate": 1269302400,
        "lastChange": 1621536477,
        "dealRating": "9.4",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/8190/capsule_sm_120.jpg?t=1593180404"
      }
    ]

    this.allDealsDetails = [
      {
        "gameInfo": {
          "storeID": "1",
          "gameID": "93503",
          "name": "BioShock Infinite 3",
          "steamAppID": "8870",
          "salePrice": "7.49",
          "retailPrice": "29.99",
          "steamRatingText": "Overwhelmingly Positive",
          "steamRatingPercent": "95",
          "steamRatingCount": "52167",
          "metacriticScore": "94",
          "metacriticLink": "/game/pc/bioshock-infinite",
          "releaseDate": 1364169600,
          "publisher": "2K Games",
          "steamworks": "1",
          "thumb": "https://steamcdn-a.akamaihd.net/steam/apps/8870/capsule_sm_120.jpg?t=1534538071"
        },
        "cheaperStores": [
          {
            "dealID": "EX0oH20b7A1H2YiVjvVx5A0HH%2F4etw3x%2F6YMGVPpKbA%3D",
            "storeID": "2",
            "salePrice": "7.00",
            "retailPrice": "29.99"
          },
          {
            "dealID": "z4El8C19yCEHrk1%2ByEedebThQVbblI7H0Z%2BAmxgZiS8%3D",
            "storeID": "3",
            "salePrice": "6.99",
            "retailPrice": "29.99"
          }
        ],
        "cheapestPrice": {
          "price": "5.90",
          "date": 1528368365
        }
      },
      {
        "gameInfo": {
          "storeID": "2",
          "gameID": "93503",
          "name": "BioShock Infinite 2",
          "steamAppID": "8870",
          "salePrice": "7.49",
          "retailPrice": "29.99",
          "steamRatingText": "Overwhelmingly Positive",
          "steamRatingPercent": "95",
          "steamRatingCount": "52167",
          "metacriticScore": "94",
          "metacriticLink": "/game/pc/bioshock-infinite",
          "releaseDate": 1364169600,
          "publisher": "2K Games",
          "steamworks": "1",
          "thumb": "https://steamcdn-a.akamaihd.net/steam/apps/8870/capsule_sm_120.jpg?t=1534538071"
        },
        "cheaperStores": [],
        "cheapestPrice": {
          "price": "5.90",
          "date": 1528368365
        }
      },
      {
        "gameInfo": {
          "storeID": "3",
          "gameID": "93503",
          "name": "BioShock Infinite 2",
          "steamAppID": "8870",
          "salePrice": "7.49",
          "retailPrice": "29.99",
          "steamRatingText": "Overwhelmingly Positive",
          "steamRatingPercent": "95",
          "steamRatingCount": "52167",
          "metacriticScore": "94",
          "metacriticLink": "/game/pc/bioshock-infinite",
          "releaseDate": 1364169600,
          "publisher": "2K Games",
          "steamworks": "1",
          "thumb": "https://steamcdn-a.akamaihd.net/steam/apps/8870/capsule_sm_120.jpg?t=1534538071"
        },
        "cheaperStores": [],
        "cheapestPrice": {
          "price": "5.90",
          "date": 1528368365
        }
      }
    ]
  }

  getAllDeals(onSale: boolean): Observable<IServerDeal[]> {
    return of(this.allDeals.filter(d => onSale ? d.isOnSale === '1' : d.isOnSale === '0'));
  }

  getDealByID(id: string): Observable<IServerDealDetail  | undefined> {
    return of(this.allDealsDetails[this.allDeals.indexOf(this.allDeals.find(d => d.dealID) as IServerDeal)]);
  }
}
