import React from 'react';
import './nav.scss';
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className='navbar-container'>
			<h2 style={{ marginLeft: '4rem' }}>Shorty</h2>
			<div style={{ flex: 1 }} />
			<ul className='nav-links'>
				<Link to='/signup' className='nav-link'>Signup</Link>
				<Link to='/login' className='nav-link'>Login</Link>
			</ul>
		</div>
	);
};
export default Nav;
