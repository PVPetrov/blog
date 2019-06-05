import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PrivateRoute from '../PrivateRoute';
import Profile from '../Profile';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import Blog from '../Blog';

import './Main.sass';

const Main = () => {
	return (
		<Container fluid className='app-main-container'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
				<PrivateRoute path='blog' component={Blog} />
				<PrivateRoute path='profile' component={Profile} />
			</Switch>
		</Container>
	);
};

export default Main;
