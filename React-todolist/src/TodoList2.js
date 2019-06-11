import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List} from 'antd';

// import { CHANGE_INPUT_VAlUE, ADD_ITEM, ITEM_DELETE } from './store/actionTypes'

import { getInputChangeAction, getAddItemAction, getItemDelete } from './store/actionCreators'

// 引入 store 自动去找.js 文件, 也可以简写为下面这样子
// import store from './store';	

// 把 store 仓库引进来
import store from './store/index';	


class TodoList2 extends Component {
	constructor(props) {
		super(props)

		// 用 store 的方法可以获得 store 中的数据, 拿到 store 中的数据
		 this.state = store.getState()
		//  console.log(this.state);

		//这个组件去定义 store, 只要 store 的数据一发生改变, 里面的函数就会自动执行
		store.subscribe(this.storeChange)
	}
	render() {
		return (
			<div style={{marginTop: 10, marginLeft: 10}}>
				<div>
					<Input 
					value={this.state.inputValue} 
					placeholder="todo info" 
					style={{width: 300, marginRight: 10}}
					onChange={this.handleInputChange}
					/>
					<Button onClick={this.handleBtnClick} type="primary">提交</Button>
				</div>
				{/* data 里面的每一个数据都会调用 renderItem 这个方法进行渲染*/}
				<List
					style={{marginTop: 10, width: 300}}
      		bordered
      		dataSource={this.state.list}
					renderItem={(item, index )=> (
						<List.Item onClick={() => {this.handleitemDelete(index)}}>   
						 {item}
						</List.Item>
					)}
				/>
			</div>
		)
	}
	handleInputChange = (e) => {
		// 组件通过 action 和 store 联系, 告诉 store 做什么就得通过 action 告诉.6
		// 创建 action, type 告诉 redux, 描述你要做的事情是什么 , action 跟 store 说句话, 你要帮我改变 inputValue, 
		// 并且把值传过去, 组件和 store 通信需要用 action, action 就是一个对象
		// const action = {
		// 	type: CHANGE_INPUT_VAlUE,
		// 	value: e.target.value
		// }



		const action = getInputChangeAction(e.target.value)
		// 把这句话(action 传给 store)
		store.dispatch(action)
		//store 不知道怎么处理,
		
	}

	handleBtnClick = () => {
		// const action = {
		// 	type: ADD_ITEM
		// }
		const action= getAddItemAction()
		store.dispatch(action)
	}

	handleitemDelete = (index) => {
		// const action = {
		// 	type: ITEM_DELETE,
		// 	index: index,
		// }
		const action = getItemDelete(index)
		store.dispatch(action)
	}
	
	

	// 这个函数是订阅 store 数据发生变化时调用的, 所以此时 store 里面的数据全是最新的数据
	storeChange = () => {
		this.setState(store.getState())
	}
	
	
}
export default TodoList2