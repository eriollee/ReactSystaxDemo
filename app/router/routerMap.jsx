//main.js
import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化
 

import App from '../container/App.jsx';
import Home from '../container/Home/index.jsx';
import List from '../container/List/index.jsx';
import Detail from '../container/Detail/index.jsx';
import NotFound from '../container/NotFound/index.jsx';

class RouteMap extends React.Component { 
	updateHandle() { 
		console.log('每次router变化之后都会触发') 
	} 
	render() { 
		return (
		 <Router  onUpdate={this.updateHandle.bind(this)}> 
			 <Route path='/' component={App}> 
				 <Route component={Home}/> 
				 <Route path='list' component={List}/>
				 <Route path='detail/:id' component={Detail}/> 
				 <Route path="*" component={NotFound}/> 
			 </Route> 
		 </Router> 
		 ) 
	} 
}

//导出组件
export default RouteMap;