//App.jsx
import React from 'react';


class App extends React.Component {
    render() {
        return (
        	<div>
	        	<p>Head</p>
	        	<div>{this.props.children}</div>
	        	<p>Footer</p>
        	</div>
        )

       
    }

}

//导出组件
export default App;