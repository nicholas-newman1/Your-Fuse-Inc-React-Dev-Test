import { Dispatch } from 'react';
import { CoinData } from '../../types/api';
import { AppActions } from '../actionTypes';
import { AppState } from '../rootReducer';
import {
  FetchCryptosFailure,
  FetchCryptosRequest,
  FetchCryptosSuccess,
  FetchMoreCryptosFailure,
  FetchMoreCryptosRequest,
  FetchMoreCryptosSuccess,
  NextPage,
  PrevPage,
  ToggleCardView,
} from './actionTypes';

export const fetchCryptosRequest = (): FetchCryptosRequest => ({
  type: 'FETCH_CRYPTOS_REQUEST',
});

export const fetchCryptosSuccess = (data: CoinData[]): FetchCryptosSuccess => ({
  type: 'FETCH_CRYPTOS_SUCCESS',
  payload: data,
});

export const fetchCryptosFailure = (error: string): FetchCryptosFailure => ({
  type: 'FETCH_CRYPTOS_FAILURE',
  payload: error,
});

export const fetchMoreCryptosRequest = (): FetchMoreCryptosRequest => ({
  type: 'FETCH_MORE_CRYPTOS_REQUEST',
});

export const fetchMoreCryptosSuccess = (
  data: CoinData[]
): FetchMoreCryptosSuccess => ({
  type: 'FETCH_MORE_CRYPTOS_SUCCESS',
  payload: data,
});

export const fetchMoreCryptosFailure = (
  error: string
): FetchMoreCryptosFailure => ({
  type: 'FETCH_MORE_CRYPTOS_FAILURE',
  payload: error,
});

export const toggleCardView = (): ToggleCardView => ({
  type: 'TOGGLE_CARD_VIEW',
});

export const nextPage = (): NextPage => ({
  type: 'NEXT_PAGE',
});

export const prevPage = (): PrevPage => ({
  type: 'PREV_PAGE',
});

export const fetchCryptos = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(fetchCryptosRequest());

    const state = getState();
    const { limit, page } = state.cryptos;

    return fetch(
      `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&page=${page}&tsym=CAD`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'Error') throw new Error(data.Message);
        dispatch(fetchCryptosSuccess(data.Data));
      })
      .catch((err) => dispatch(fetchCryptosFailure(err.message)));
  };
};

export const fetchMoreCryptos = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(fetchMoreCryptosRequest());

    const state = getState();
    const { limit, page } = state.cryptos;

    return fetch(
      `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&page=${page}&tsym=CAD`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMoreCryptosSuccess(data.Data)))
      .catch((err) => dispatch(fetchMoreCryptosFailure(err.message)));
  };
};
