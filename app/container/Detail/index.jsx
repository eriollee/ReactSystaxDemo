import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化

class Detail extends React.Component{

	render() {
 
		return(
			<p>Detail,url parameter:{this.props.params.id}</p>
		)
	}

 
}

export default Detail;