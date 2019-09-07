import checkPropTypes from 'check-prop-types';
import configureMockStore from 'redux-mock-store';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [reduxThunk];

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}

export const mockStore = (initialState = {}) => {
  const createMockStoreWithMiddleware = configureMockStore(middlewares);
  return createMockStoreWithMiddleware({...initialState});
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}
