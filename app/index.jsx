//main.js
import React from 'react';
import { render  } from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化
import Home from './container/Home/index.jsx';

import RouteMap from './router/routerMap.jsx'
 
render(
	<Router   > 
		<Route path='/' component={Home}> 
	    </Route> 
	 </Router> ,
	document.getElementById('content')
)

