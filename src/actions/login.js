import * as c from '../constants/login';
import * as api from '../services/login';
import history from '../history';

export const login = credentials => async dispatch => {
	dispatch({ type: c.LOGIN });
	try {
		const { data } = await api.login(credentials);
		if (!data.Error && data.token) {
			dispatch({ type: c.LOGIN_SUCCESS, data });
			history.push('/home');
		} else {
			dispatch({ type: c.LOGIN_ERROR, data });
		}
	} catch (err) {
		console.log('Login error', err);
		dispatch({ type: c.LOGIN_ERROR, err });
	}
};

export const signup = credentials => async dispatch => {
	dispatch({ type: c.SIGNUP });
	try {
		const { data } = await api.signup(credentials);
		if (!data.Error && data.token) {
			dispatch({ type: c.SIGNUP_SUCCESS, data });
			history.push('/home');
		} else {
			dispatch({ type: c.SIGNUP_ERROR, data });
		}
	} catch (err) {
		console.log('Signup error', err);
		dispatch({ type: c.SIGNUP_ERROR, err });
	}
};

export const logout = () => ({ type: c.LOGOUT });
