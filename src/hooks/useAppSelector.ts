import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../redux/rootReducer';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
