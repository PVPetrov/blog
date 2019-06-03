/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import history from '../../history';
import getWidthAndHeight from '../../utils/getWidthAndHeight';

import './Header.sass';

const HeaderLink = ({ name = '', address = '/', style = {} }) => (
	<NavLink className='nav-link' activeClassName='active' style={{ ...style }} to={address}>
		{name}
	</NavLink>
);

const navLinks = [
	{ name: 'Home', address: '/' },
	{ name: 'Profile', address: '/profile' },
	{ name: 'Blogs', address: '/blogs' },
];

const Navigation = ({ vertical = true, style = {} }) => (
	<nav className='header-nav' style={{ ...style, flexDirection: vertical ? 'column' : 'row' }}>
		{[navLinks.map(link => <HeaderLink key={link.address} {...link} />)]}
	</nav>
);

const LoginLink = ({ isMobile }) => (
	<div className='nav-login'>
		{isMobile ? (
			<i
				onClick={() => history.push('/login')}
				style={{ cursor: 'pointer' }}
				className='fas fa-sign-in-alt'
			/>
		) : (
			<>
				<NavLink to='/signup'>Signup</NavLink>
				<span className='horizontal-divider' />
				<NavLink to='/login'>Login</NavLink>
			</>
		)}
	</div>
);

const Logo = () => {
	return (
		<div className='navbar-brand'>
			<h2 onClick={() => history.push('/')}>Log Blog</h2>
		</div>
	);
};

const AuthHeader = ({ isMobile, user }) => (
	<>
		{isMobile ? (
			<Dropdown alignRight drop='down' style={{ marginLeft: 'auto' }}>
				<Dropdown.Toggle as='div' id='toggle-menu-bar' style={{ alignSelf: 'stretch' }}>
					<i style={{ cursor: 'pointer' }} className='fas fa-bars' />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Navigation vertical={isMobile} />
				</Dropdown.Menu>
			</Dropdown>
		) : (
			<>
				<Navigation vertical={isMobile} />
				<HeaderLink style={{ marginLeft: 'auto' }} address='/profile' name={`${user.firstName}`} />
			</>
		)}
	</>
);

const Header = ({ user }) => {
	const { width } = getWidthAndHeight();
	const isMobile = width < 500;
	return (
		<div className='header-container'>
			{user.token ? (
				<>
					<Logo />
					<AuthHeader isMobile={isMobile} user={user} />
				</>
			) : (
				<>
					<Logo />
					<LoginLink isMobile={isMobile} />
				</>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	user: state.login.user,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Header);
