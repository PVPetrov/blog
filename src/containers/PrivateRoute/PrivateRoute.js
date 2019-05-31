import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, sessionKey, ...rest }) => (
	<Route
		{...rest}
		render={props => (sessionKey ? <Component {...props} /> : <Redirect to='/' />)}
	/>
);

const mapStateToProps = state => ({
	sessionKey: state.login.user.sessionKey,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PrivateRoute);
