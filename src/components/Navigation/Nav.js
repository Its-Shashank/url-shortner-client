import React from 'react';
import './nav.scss';

const Nav = () => {
	return(
		<div className='navbar-container'>
			<h2 style={{marginLeft: '4rem'}}>Shorty</h2>
			<div style={{flex: 1}}></div>
			<ul className='nav-links'>
				<li className='nav-link'>Signup</li>
				<li className='nav-link'>Login</li>
			</ul>
		</div>
	)
}
export default Nav;