import axios from 'axios';

export const login = credentials => {
	return axios.post('http://localhost:4000/login', { ...credentials });
};

export const signup = credentials => {
	return axios.post('http://localhost:4000/signup', { ...credentials });
};
