import React from 'react';
import './form.scss';

function Form({ login, signup }) {
	return (
		<div className='form-container'>
			{signup && (
				<input
					type='text'
					name='username'
					id='username'
					placeholder='Enter username'
				/>
			)}
			<input
				type='email'
				name='email'
				id='email'
				placeholder='Enter your Email'
			/>
			<input
				type='password'
				name='password'
				id='password'
				placeholder='Enter password'
			/>
			<button className='login-btn'>{signup ? 'Signup' : 'Login'}</button>
		</div>
	);
}

export default Form;
