import { CoinData } from '../../types/api';

export const FETCH_CRYPTOS_REQUEST = 'FETCH_CRYPTOS_REQUEST';
export const FETCH_CRYPTOS_SUCCESS = 'FETCH_CRYPTOS_SUCCESS';
export const FETCH_CRYPTOS_FAILURE = 'FETCH_CRYPTOS_FAILURE';
export const FETCH_MORE_CRYPTOS_REQUEST = 'FETCH_MORE_CRYPTOS_REQUEST';
export const FETCH_MORE_CRYPTOS_SUCCESS = 'FETCH_MORE_CRYPTOS_SUCCESS';
export const FETCH_MORE_CRYPTOS_FAILURE = 'FETCH_MORE_CRYPTOS_FAILURE';

export interface FetchCryptosRequest {
  type: typeof FETCH_CRYPTOS_REQUEST;
}
export interface FetchCryptosSuccess {
  type: typeof FETCH_CRYPTOS_SUCCESS;
  payload: CoinData[];
}
export interface FetchCryptosFailure {
  type: typeof FETCH_CRYPTOS_FAILURE;
  payload: string;
}
export interface FetchMoreCryptosRequest {
  type: typeof FETCH_MORE_CRYPTOS_REQUEST;
}
export interface FetchMoreCryptosSuccess {
  type: typeof FETCH_MORE_CRYPTOS_SUCCESS;
  payload: CoinData[];
}
export interface FetchMoreCryptosFailure {
  type: typeof FETCH_MORE_CRYPTOS_FAILURE;
  payload: string;
}

export type CryptosActionTypes =
  | FetchCryptosRequest
  | FetchCryptosSuccess
  | FetchCryptosFailure
  | FetchMoreCryptosRequest
  | FetchMoreCryptosSuccess
  | FetchMoreCryptosFailure;
