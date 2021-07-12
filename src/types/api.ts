export interface CoinData {
  CoinInfo: CoinInfo;
  RAW?: {
    CAD: CoinQuoteRaw;
  };
  DISPLAY?: {
    CAD: CoinQuoteDisplay;
  };
}

export interface CoinInfo {
  Id: string | null;
  Name: string | null;
  FullName: string | null;
  Internal: string | null;
  ImageUrl: string | null;
  Url: string | null;
  Algorithm: string | null;
  ProofType: string | null;
  Rating: {
    Weiss: {
      Rating: string | null;
      TechnologyAdoptionRating: string | null;
      MarketPerformanceRating: string | null;
    } | null;
  } | null;
  NetHashesPerSecond: number | null;
  BlockNumber: number | null;
  BlockTime: number | null;
  BlockReward: number | null;
  AssetLaunchDate: string | null;
  MaxSupply: number | null;
  Type: number | null;
  DocumentType: string | null;
}

export interface CoinQuoteRaw {
  TYPE: string | null;
  MARKET: string | null;
  FROMSYMBOL: string | null;
  TOSYMBOL: string | null;
  FLAGS: string | null;
  PRICE: number | null;
  LASTUPDATE: number | null;
  MEDIAN: number | null;
  LASTVOLUME: number | null;
  LASTVOLUMETO: number | null;
  LASTTRADEID: string | null;
  VOLUMEDAY: number | null;
  VOLUMEDAYTO: number | null;
  VOLUME24HOUR: number | null;
  OPENDAY: number | null;
  HIGHDAY: number | null;
  LOWDAY: number | null;
  OPEN24HOUR: number | null;
  HIGH24HOUR: number | null;
  LOW24HOUR: number | null;
  LASTMARKET: string | null;
  VOLUMEHOUR: number | null;
  VOLUMEHOURTO: number | null;
  OPENHOUR: number | null;
  HIGHHOUR: number | null;
  LOWHOUR: number | null;
  TOPTIERVOLUME24HOUR: number | null;
  TOPTIERVOLUME24HOURTO: number | null;
  CHANGE24HOUR: number | null;
  CHANGEPCT24HOUR: number | null;
  CHANGEDAY: number | null;
  CHANGEPCTDAY: number | null;
  CHANGEHOUR: number | null;
  CHANGEPCTHOUR: number | null;
  CONVERSIONTYPE: string | null;
  CONVERSIONSYMBOL: string | null;
  SUPPLY: number | null;
  MKTCAP: number | null;
  MKTCAPPENALTY: number | null;
  TOTALVOLUME24H: number | null;
  TOTALVOLUME24HTO: number | null;
  TOTALTOPTIERVOLUME24H: number | null;
  TOTALTOPTIERVOLUME24HTO: number | null;
  IMAGEURL: string | null;
}

export interface CoinQuoteDisplay {
  FROMSYMBOL: string | null;
  TOSYMBOL: string | null;
  MARKET: string | null;
  PRICE: string | null;
  LASTUPDATE: string | null;
  LASTVOLUME: string | null;
  LASTVOLUMETO: string | null;
  LASTTRADEID: string | null;
  VOLUMEDAY: string | null;
  VOLUMEDAYTO: string | null;
  VOLUME24HOUR: string | null;
  VOLUME24HOURTO: string | null;
  OPENDAY: string | null;
  HIGHDAY: string | null;
  LOWDAY: string | null;
  OPEN24HOUR: string | null;
  HIGH24HOUR: string | null;
  LOW24HOUR: string | null;
  LASTMARKET: string | null;
  VOLUMEHOUR: string | null;
  VOLUMEHOURTO: string | null;
  OPENHOUR: string | null;
  HIGHHOUR: string | null;
  LOWHOUR: string | null;
  TOPTIERVOLUME24HOUR: string | null;
  TOPTIERVOLUME24HOURTO: string | null;
  CHANGE24HOUR: string | null;
  CHANGEPCT24HOUR: string | null;
  CHANGEDAY: string | null;
  CHANGEPCTDAY: string | null;
  CHANGEHOUR: string | null;
  CHANGEPCTHOUR: string | null;
  CONVERSIONTYPE: string | null;
  CONVERSIONSYMBOL: string | null;
  SUPPLY: string | null;
  MKTCAP: string | null;
  MKTCAPPENALTY: string | null;
  TOTALVOLUME24H: string | null;
  TOTALVOLUME24HTO: string | null;
  TOTALTOPTIERVOLUME24H: string | null;
  TOTALTOPTIERVOLUME24HTO: string | null;
  IMAGEURL: string | null;
}
