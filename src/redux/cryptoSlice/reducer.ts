import { CoinData } from '../../types/api';
import {
  FETCH_CRYPTOS_FAILURE,
  FETCH_CRYPTOS_REQUEST,
  FETCH_CRYPTOS_SUCCESS,
  CryptosActionTypes,
  FETCH_MORE_CRYPTOS_REQUEST,
  FETCH_MORE_CRYPTOS_SUCCESS,
  FETCH_MORE_CRYPTOS_FAILURE,
  TOGGLE_CARD_VIEW,
  NEXT_PAGE,
  PREV_PAGE,
} from './actionTypes';

interface CryptosState {
  loading: boolean;
  data: CoinData[];
  error: string;
  limit: number;
  page: number;
  cardView: boolean;
  viewLimit: number;
  viewPage: number;
}

// initial state
const initialState: CryptosState = {
  loading: true,
  data: [],
  error: '',
  limit: 10,
  page: 0,
  cardView: true,
  viewLimit: 4,
  viewPage: 0,
};

// reducer
const cryptosReducer = (state = initialState, action: CryptosActionTypes) => {
  switch (action.type) {
    case FETCH_CRYPTOS_REQUEST:
      return { ...state, loading: true };
    case FETCH_CRYPTOS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: '' };
    case FETCH_CRYPTOS_FAILURE:
      return { ...state, data: [], loading: false, error: action.payload };
    case FETCH_MORE_CRYPTOS_REQUEST:
      return { ...state, loading: true, page: state.page + 1 };
    case FETCH_MORE_CRYPTOS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        error: '',
      };
    case FETCH_MORE_CRYPTOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case TOGGLE_CARD_VIEW:
      return { ...state, cardView: !state.cardView };
    case NEXT_PAGE:
      return { ...state, viewPage: state.viewPage + 1 };
    case PREV_PAGE:
      return { ...state, viewPage: state.viewPage - 1 };
    default:
      return state;
  }
};

export default cryptosReducer;
