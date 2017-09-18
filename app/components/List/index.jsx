import React from 'react';

class List extends React.Component {
	constructor(props,context) {
			super(props,context);
	}

 
    render() {
    	const data = this.props.todos;

    	return(
    		<ul style={{marginTop:'10px',fontSize:'20px',lineheight:'10px'}}>
    			{data.map((item,index)=>{
    				return <li key={index} onClick={this.clickHandler.bind(this,item.id)}> {item.text} </li>
    			})}
    		</ul>
    	)
    
    }

	clickHandler(id) {
		this.props.deleteFn(id);
	}

}


//导出组件
export default List;