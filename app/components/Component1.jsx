//Component1.jsx
import React from 'react';


class Component1 extends React.Component {
    render() {
    	var m = 100;
    	var s = {fontSize:'50px',display:'block',color:'#567676'}
        var arr =['aa','bb','cc'];
        return (

            <div style={s}>Hello World234!
            <p onClick={this.clickHandler.bind(this)}>123</p>
            {m}
            <ul>	
            	{arr.map(function(item,index){
            		return <li key={index}>{item}</li>
            	})}
            </ul>
            </div>
        )

       
    }

     clickHandler(e){
     		e.preventDefault()
     		console.log(this.clickHandler);
        	console.log(Date.now())
     }
}

//导出组件
export default Component1;
