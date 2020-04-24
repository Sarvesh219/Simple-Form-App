import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {};
const enhancers = [];
const middleware= [thunk];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(reducers, initialState, composedEnhancers);

export default store;