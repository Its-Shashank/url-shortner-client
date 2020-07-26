import React from 'react';
import Landing from './Pages/Landing/Landing';
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/login' exact component={Login} />
				<Route path='/signup' exact component={Signup} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
