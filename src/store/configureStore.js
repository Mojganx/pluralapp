import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
//initialState = to initialize store with state (especially with serverside rendering)
// return a call to createStore which we imported , it takes 3 parameters: rootReducer and initialState
//applyMiddleware =
//redux-immutable-state-invariant = checks whether changes are made to the store
