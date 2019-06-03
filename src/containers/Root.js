import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../layout/Main';
import Header from './Header';
// import Home from './Home';
// import Login from './Login';
// import PrivateRoute from './PrivateRoute';
import App from './App';
import history from '../history';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App} />
		</Router>
	</Provider>
);

Root.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	store: PropTypes.object.isRequired,
};

export default Root;
