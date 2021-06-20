import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { State } from './types';
import { customersReducer } from '../services/customers';

const rootReducer = combineReducers<State>({
  customers: customersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
