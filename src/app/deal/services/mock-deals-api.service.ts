import { Injectable } from '@angular/core';
import {IDealsApiService} from "./i-deals-api.service";
import {IDeal} from "../state/deal.model";
import {Observable, of} from "rxjs";
import {IServerDeal} from "../state/server-deal.model";

@Injectable({
  providedIn: 'root'
})
export class MockDealsApiService implements IDealsApiService {
  private readonly allDeals: IServerDeal[];
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
        "isOnSale": "1",
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
        "storeID": "1",
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
        "storeID": "1",
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
      },
      {
        "internalName": "THIEFIITHEMETALAGE",
        "title": "Thief II: The Metal Age",
        "metacriticLink": "/game/pc/thief-ii-the-metal-age",
        "dealID": "TlzUCY9p3Sq1bY%2Br4aGWO5Cs2UxE1lYnuQD05gxNwIM%3D",
        "storeID": "1",
        "gameID": "87640",
        "salePrice": "0.97",
        "normalPrice": "6.99",
        "isOnSale": "1",
        "savings": "86.123033",
        "metacriticScore": "87",
        "steamRatingText": "Very Positive",
        "steamRatingPercent": "93",
        "steamRatingCount": "1189",
        "steamAppID": "211740",
        "releaseDate": 953769600,
        "lastChange": 1621540630,
        "dealRating": "9.4",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/211740/capsule_sm_120.jpg?t=1592493747"
      },
      {
        "internalName": "DUNGEONSIEGE",
        "title": "Dungeon Siege",
        "metacriticLink": "/game/pc/dungeon-siege",
        "dealID": "Hli8KbDatTjYjj%2BjpnfUuVKjxPwQPmblW1llCXyMMmU%3D",
        "storeID": "1",
        "gameID": "192",
        "salePrice": "0.97",
        "normalPrice": "6.99",
        "isOnSale": "1",
        "savings": "86.123033",
        "metacriticScore": "86",
        "steamRatingText": "Mostly Positive",
        "steamRatingPercent": "78",
        "steamRatingCount": "2394",
        "steamAppID": "39190",
        "releaseDate": 1017532800,
        "lastChange": 1621540893,
        "dealRating": "9.3",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/39190/capsule_sm_120.jpg?t=1592491243"
      },
      {
        "internalName": "TOMBRAIDERANNIVERSARY",
        "title": "Tomb Raider: Anniversary",
        "metacriticLink": "/game/pc/tomb-raider-anniversary",
        "dealID": "ryaV37fbWkAIG6ZLy%2FtViuEGOIShgUVV7kpgbYlDqQk%3D",
        "storeID": "1",
        "gameID": "456",
        "salePrice": "0.98",
        "normalPrice": "8.99",
        "isOnSale": "1",
        "savings": "89.098999",
        "metacriticScore": "83",
        "steamRatingText": "Very Positive",
        "steamRatingPercent": "82",
        "steamRatingCount": "3621",
        "steamAppID": "8000",
        "releaseDate": 1181001600,
        "lastChange": 1621540355,
        "dealRating": "9.3",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/8000/capsule_sm_120.jpg?t=1592494287"
      },
      {
        "internalName": "TOMBRAIDER",
        "title": "Tomb Raider",
        "metacriticLink": "/game/pc/tomb-raider",
        "dealID": "kWwtV4oy9hfOjwLK521is0GJsspEXRq8K6pQKH6xvI0%3D",
        "storeID": "1",
        "gameID": "87392",
        "salePrice": "2.24",
        "normalPrice": "14.99",
        "isOnSale": "1",
        "savings": "85.056704",
        "metacriticScore": "86",
        "steamRatingText": "Overwhelmingly Positive",
        "steamRatingPercent": "96",
        "steamRatingCount": "113310",
        "steamAppID": "203160",
        "releaseDate": 1362355200,
        "lastChange": 1621536141,
        "dealRating": "9.2",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/203160/capsule_sm_120.jpg?t=1617888669"
      },
      {
        "internalName": "F12020",
        "title": "F1 2020",
        "metacriticLink": "/game/pc/f1-2020",
        "dealID": "l0PK4iJqTcB%2FhSle7RF7n7NGkOhHslBSff8Umv%2BzSeY%3D",
        "storeID": "1",
        "gameID": "213774",
        "salePrice": "14.99",
        "normalPrice": "59.99",
        "isOnSale": "1",
        "savings": "75.012502",
        "metacriticScore": "88",
        "steamRatingText": "Very Positive",
        "steamRatingPercent": "93",
        "steamRatingCount": "28641",
        "steamAppID": "1080110",
        "releaseDate": 1594252800,
        "lastChange": 1621535931,
        "dealRating": "9.1",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/1080110/capsule_sm_120.jpg?t=1621526432"
      },
      {
        "internalName": "TOMBRAIDERUNDERWORLD",
        "title": "Tomb Raider: Underworld",
        "metacriticLink": "/game/pc/tomb-raider-underworld",
        "dealID": "XhdaphoqPFV2dl6MtPYcKItazwVt9ldkx4ybvnmPfZ0%3D",
        "storeID": "1",
        "gameID": "643",
        "salePrice": "0.98",
        "normalPrice": "8.99",
        "isOnSale": "1",
        "savings": "89.098999",
        "metacriticScore": "80",
        "steamRatingText": "Mostly Positive",
        "steamRatingPercent": "76",
        "steamRatingCount": "3549",
        "steamAppID": "8140",
        "releaseDate": 1226966400,
        "lastChange": 1621540596,
        "dealRating": "9.1",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/8140/capsule_sm_120.jpg?t=1592494880"
      }
    ]
  }

  getAllDeals(onSale: boolean): Observable<IServerDeal[]> {
    return of(this.allDeals.filter(d => onSale ? d.isOnSale === '1' : d.isOnSale === '0'));
  }

  getDealByID(id: string): Observable<IServerDeal  | undefined> {
    return of(this.allDeals.find(d => d.dealID === id));
  }
}
