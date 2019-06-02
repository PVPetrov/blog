/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import history from '../../history';
import getWidthAndHeight from '../../utils/getWidthAndHeight';

import './Header.sass';

const HeaderLink = ({ name = '', address = '/' }) => (
	<div>
		<NavLink className='nav-link' activeClassName='active' to={address}>
			{name}
		</NavLink>
	</div>
);

const navLinks = [
	{ name: 'Home', address: '/' },
	{ name: 'Profile', address: '/profile' },
	{ name: 'Blogs', address: '/blogs' },
];

const Navigation = () => (
	<div className='header-collapsable'>
		<nav className='header-nav'>{[navLinks.map(link => <HeaderLink {...link} />)]}</nav>

		<div className='nav-login'>
			<NavLink to='/signup'>Signup</NavLink>
			<span className='horizontal-divider' />
			<NavLink to='/login'>Login</NavLink>
		</div>
	</div>
);

const Header = () => {
	const [opened, setOpened] = useState(false);
	const { width } = getWidthAndHeight();
	return (
		<div className='header-container'>
			<div className='navbar-brand' onClick={() => history.push('/')}>
				Log Blog
			</div>
			{width > 500 ? (
				<Navigation />
			) : (
				<div className='hamburger-menu'>
					<button
						onClick={() => {
							console.log(opened);
							setOpened(!opened);
						}}
						type='button'
					>
						menu
					</button>
				</div>
			)}
			{opened ? (
				<div className='header-dropdown-nav'>
					<Navigation />
				</div>
			) : null}
		</div>
	);
};

export default Header;
