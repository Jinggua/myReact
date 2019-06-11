import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem'
import App from './App'
import axios from 'axios'
// import Test from './Test'


// console.log('React', React);
// 相当于
// var React = require('react')
// console.log('React', Re);

// var {Component , Fragment} = React

// Fragment 占位符

/*
	当组件的的 state 或 props 发生改变的时候, render 就会执行
*/ 
class TodoList extends Component {
	// constructor是最优先执行的函数
	constructor(props) {
		super(props);
		// 定义数据. 数据 需要定义在 状态 里面.
		this.state= {
			inputValue: '',
			list: [],
		}
	}
	
	render() {
			// var obj = {
			// 	value: 8,
			// 	f: function (params) {
			// 		return this.value
			// 	}
			// }
			// [1,2,3].map(obj.f)
		return (
			<Fragment>
				<h1>Todo</h1>	
				<div>
					{/*  jsx 中, 用 js 表达式必须加 { }   this.handleInputChange 只是把函数取出来
					handleInputChange 中的 this 丢失了.
					className htmlFor(和 for 循环影响), dangerouslySetInnerHTML.
					jsx 中 { } 花括号里面的写的是 js 表独处
				*/}
				<label htmlFor='inserArea'>输入内容</label>
					<input
					className='input'
					id='inserArea'
					value={this.state.inputValue}
					onChange={this.handleInputChange.bind(this)}
					ref={(input) => this.input = input}
					/>
					<button onClick={this.handleBtnClick.bind(this)}>提交</button>
				</div>
				<ul>
					{/* 父子组件通信, 父组件也可以传递一个方法给子组件 */}
					{this.getTodoItem()}
				</ul>
				{/* <Test content={this.state.inputValue}/> */}
				<App />
			</Fragment> 
		)
	}

	// ajax 放在这里最好, 因为只调用一次 ajax 就好
	componentDidMount() {
		axios.get('/api/todoList').then((data) => console.log(data)).catch(console.log('error'))
	}
	
	getTodoItem = () => {
		return this.state.list.map((item, index) => {
			return (
				<TodoItem key={index} deleteItem={this.handleItemDelelte} content={item} index={index} />
			)
		})
	}
	handleInputChange(e) {
		// this.setState({
		// 	inputValue: e.target.value
		// })
		// 新版的需要这么写, setState 里面放函数, 函数里面返回这个对象
		// 异步
		// console.log('input',this.input);
		
		var value = this.input.value
		this.setState(() => ({
			inputValue: value
		}))
	}
	handleBtnClick () {
		// this.setState({
		// 	list: [...this.state.list, this.state.inputValue],
		// 	inputValue: ''
		// })
		// prevState 就相当于 this.state
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}))
	}

	handleItemDelelte = (index) => {
		/*
		immutable 概念
		state 我们操作 state 的时候, state不允许做任何改变, 
		所以下面拷贝出来一份数据 也就是 const list = [...this.state.list]
		*/ 
		// console.log('index', index);
		// const list = [...this.state.list]
		
		// 左边的 list 是告诉 react 那个数据需要改变, 右边的 list 是改为什么值.
		// this.setState({
		// 	list: list 
		// })
		this.setState((prevState) => {
			const list = [...prevState.list]
			list.splice(index, 1)
			return {
				list
			}
		})
	}
}

export default TodoList



// class A {
// 	constructor () {
// 		this.a = 1
// 	}
// 	gea() {
// 		console.log('this', this);
		
// 		console.log(this.a);
		
// 	}
// 	ss() {
// 		[1,2,3].map(this.gea.bind(this))
// 	}
// }
// a = new A()

// a.ss() 