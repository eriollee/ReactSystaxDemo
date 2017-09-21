//main.js
import React from 'react';
import { render  } from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化
import {BrowserRouter} from 'react-router-dom';
import Home from './container/Home/index.jsx';
import List from './container/List/index.jsx';
import RouteMap from './router/routerMap.jsx'
import createBrowserHistory from 'history/createBrowserHistory'


render(
	<BrowserRouter   > 
		<Route path='/' component={Home} /> 
	 </BrowserRouter> ,
	document.getElementById('content')
)

