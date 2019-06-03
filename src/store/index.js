/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { throttle } from 'lodash';
import logger from '../middleware/logger';
import reducer from '../reducers';
import { saveState } from './localStorage';

const middleware = [thunk, logger];

export default preloadedState => {
	const store = createStore(
		reducer,
		preloadedState,
		composeWithDevTools(applyMiddleware(...middleware)),
	);
	store.subscribe(
		throttle(() => {
			saveState(store.getState());
		}),
	);
	return store;
};
