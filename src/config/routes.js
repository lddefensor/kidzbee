import React from 'react';  
import {Router, Route, IndexRoute, hashHistory} from 'react-router';  

import App from '../components/App';
import MathAdditionContainer from '../containers/MathAdditionContainer';

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={App} >
			<IndexRoute component={MathAdditionContainer} />
			<Route path=':itemCount'  component={MathAdditionContainer} />
		</Route>
	</Router>
);

export default routes;