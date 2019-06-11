import React, { Component } from 'react';
// props 类型校验, 父组件不能乱传, 在子组件引入
import PropTypes from 'prop-types'
class TodoItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		// console.log('next', nextProps.content);
		// console.log('this', this.props.content);
		if (nextProps.content !== this.props.content) {
				return true
		} else {
			return false
		}
	}
	
	handleClick = () => {
		// 这里面的 this 指向父组件
		const {deleteItem, index} = this.props
		deleteItem(index)		
		// this.props.deleteItem 相当于 this.handleItemDelelte, 调用的时候, 前面的 this,
		// 是子组件的this, 我们可以在传过来之前吧 this 绑定我父组件.
	}
	render() {
		console.log('child render');
		const {content} = this.props
		return (
			<li onClick={this.handleClick}>{content}</li>
		)
	}
}

// 对TodoItem 这个组件做属性校验, 如果父组件没传, 就不会进行这个校验, 必须传 就加 isRequired.
// PropTypes(对象里面的) 和上面引入的对应
TodoItem.propTypes = {
	// test: PropTypes.string.isRequired,
	content: PropTypes.string,
	// arrayOf 提供一个或的功能
	// content: PropTypes.arrayOf(PropTypes.number,PropTypes.string),
	deleteitem: PropTypes.func,
	index: PropTypes.number
}

TodoItem.defaultProps = {
	test: 'hello world'
}
// 导出
export default TodoItem
