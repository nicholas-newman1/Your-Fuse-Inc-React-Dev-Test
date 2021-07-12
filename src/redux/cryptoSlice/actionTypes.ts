import { CoinData } from '../../types/api';

export const FETCH_CRYPTOS_REQUEST = 'FETCH_CRYPTOS_REQUEST';
export const FETCH_CRYPTOS_SUCCESS = 'FETCH_CRYPTOS_SUCCESS';
export const FETCH_CRYPTOS_FAILURE = 'FETCH_CRYPTOS_FAILURE';
export const FETCH_MORE_CRYPTOS_REQUEST = 'FETCH_MORE_CRYPTOS_REQUEST';
export const FETCH_MORE_CRYPTOS_SUCCESS = 'FETCH_MORE_CRYPTOS_SUCCESS';
export const FETCH_MORE_CRYPTOS_FAILURE = 'FETCH_MORE_CRYPTOS_FAILURE';
export const TOGGLE_CARD_VIEW = 'TOGGLE_CARD_VIEW';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

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
export interface ToggleCardView {
  type: typeof TOGGLE_CARD_VIEW;
}
export interface NextPage {
  type: typeof NEXT_PAGE;
}
export interface PrevPage {
  type: typeof PREV_PAGE;
}

export type CryptosActionTypes =
  | FetchCryptosRequest
  | FetchCryptosSuccess
  | FetchCryptosFailure
  | FetchMoreCryptosRequest
  | FetchMoreCryptosSuccess
  | FetchMoreCryptosFailure
  | ToggleCardView
  | NextPage
  | PrevPage;
