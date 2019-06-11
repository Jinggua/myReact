import React, {Component} from 'react'

// 测试 props 改变, render 重新渲染
class Test extends Component {
	// 当父组件的 render 函数运行时, 他的子组件的 render 函数也将会被重新运行一遍
	render() {
		console.log('test render');
		return (
			<div>{this.props.content}</div>
		)
	}
}

export default Test