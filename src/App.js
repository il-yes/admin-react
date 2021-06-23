import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home, Corporates, Corporate} from './pages';



function App () {	
    return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/corporates">
					<Corporates />
				</Route>
				<Route exact path="/corporates/:id">
					<Corporate />
				</Route>
			</Switch>
		</Router>
    );
  
}

export default App;
