export interface IServerDealDetail {
  "gameInfo": {
    "storeID": string,
    "gameID": string,
    "name": string,
    "steamAppID": string,
    "salePrice": string,
    "retailPrice": string,
    "steamRatingText": string,
    "steamRatingPercent": string,
    "steamRatingCount": string,
    "metacriticScore": string,
    "metacriticLink": string,
    "releaseDate": number,
    "publisher": string,
    "steamworks": string,
    "thumb": string
  },
  "cheaperStores": IServerCheaperStores[],
  "cheapestPrice": { "price": string, "date": number }
}

interface IServerCheaperStores {
  "dealID": string,
  "storeID": string,
  "salePrice": string,
  "retailPrice": string
}

