import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化

class List extends React.Component{

	render() {
		const arr = [1,2,3]
		return(
			 <ul>
			 {arr.map((item,index) =>{
			 	return <li key={index} onClick={this.clickHandler.bind(this,item)}>js jump to {item}</li>
			 })}
			 </ul>
		)
	}

	clickHandler(value){
		hashHistory.push('/detail/' + value)
	}
}

export default List;