import React from 'react';
import Form from '../../components/Form/Form';
import Nav from '../../components/Navigation/Nav';
import './signup.scss';
import { Link } from 'react-router-dom';

function Login() {
	return (
		<div>
			<Nav />
			<div className='signup-container'>
				<div className='signup-header'>
					<h1>Signup and start sharing.</h1>
					<h4>
						Don't have an account?{' '}
						<Link
							to='/login'
							style={{ textDecoration: 'none', color: '#6c63ff' }}
						>
							Login
						</Link>
					</h4>
				</div>
				<Form signup={true} />
			</div>
		</div>
	);
}

export default Login;
