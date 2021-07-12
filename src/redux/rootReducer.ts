import { combineReducers } from 'redux';
import cryptosReducer from './cryptoSlice/reducer';

const rootReducer = combineReducers({
  cryptos: cryptosReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
