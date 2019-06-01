import React from 'react';

import './Main.sass';

const Main = ({ header = null, main = null }) => {
	return (
		<div className='app-container'>
			<header className='app-header'>{header}</header>
			<main className='app-main'>{main}</main>
		</div>
	);
};

export default Main;
