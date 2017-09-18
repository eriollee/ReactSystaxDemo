import React from 'react';

import Input from '../../components/Input/index.jsx'
import List from '../../components/List/index.jsx'
import Component1 from '../../components/Component1.jsx';
class Todo extends React.Component {
	constructor(props,context) {
			super(props,context);
			this.state = {
				todos:[]
			}
	}

 
    render() {
    	return(
    		<div>
    			<Input submitFn={this.submitFn.bind(this)}/>
    			<List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)} />
    			<Component1 />
    		</div>

    	)

    }

  

    submitFn(value){
    	const id = this.state.todos.length;
    	this.setState({
    		todos:this.state.todos.concat({
    			id:id,
    			text:value
    		})

    	})
    }

    deleteFn(id){
    	let data = this.state.todos;
    	this.setState({
    		todos: data.filter(item=>{
    			if(item.id !==id){
    				return item
    			}
    		})
    	})
    }
}
//导出组件
export default Todo;