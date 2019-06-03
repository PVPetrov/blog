import { combineReducers } from 'redux';
import * as c from '../constants/login';

const user = (state = {}, { type, data }) => {
	switch (type) {
		case c.LOGIN_SUCCESS:
			return data;
		case c.LOGOUT:
			return {};
		default:
			return state;
	}
};

const isFetching = (state = false, { type }) => {
	switch (type) {
		case c.LOGIN:
			return true;
		case c.LOGIN_SUCCESS:
		case c.LOGIN_ERROR:
			return false;
		default:
			return state;
	}
};

export default combineReducers({ user, isFetching });
