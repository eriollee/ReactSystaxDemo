import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化

class Home extends React.Component{

	render() {
		return(
			<div>
				<p>Home</p>
				<Link to="/list">to list</Link>
			</div>
		)
	}
}

export default Home;


 