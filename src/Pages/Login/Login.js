import React from 'react';
import Form from '../../components/Form/Form';
import Nav from '../../components/Navigation/Nav';
import './login.scss';
import { Link } from 'react-router-dom';

function Login() {
	return (
		<div>
			<Nav />
			<div className='login-container'>
				<div className='login-header'>
					<h1>Login and start sharing.</h1>
					<h4>
						Don't have an account?{' '}
						<Link
							to='/signup'
							style={{ textDecoration: 'none', color: '#6c63ff' }}
						>
							Signup
						</Link>
					</h4>
				</div>
				<Form login={true} />
			</div>
		</div>
	);
}

export default Login;
