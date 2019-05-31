import axios from 'axios';

export const login = credentials => axios.post('http://localhost:4000/login', { ...credentials });
