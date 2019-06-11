import { CHANGE_INPUT_VAlUE, ADD_ITEM, ITEM_DELETE } from './actionTypes'

// var a = import('./actionTypes')
// console.log('aaa111', a);

const defaultState = {
	inputValue: '',
	list: [],
}

// reducer 可以接收 state, 不能直接修改 state
// reducer 必须是纯函数,纯函数指的是, 给定固定的输入,就一定会有固定的输出, 而且不会有任何副作用.
export default (state = defaultState, action) => {
	// state 表示 store 上一次存储的数据 
	// console.log('state',state);
	// console.log('action',action);
	console.log('action', action);
	
	if (action.type === CHANGE_INPUT_VAlUE) {
		// 深复制		
		const newState = JSON.parse(JSON.stringify(state))
		newState.inputValue = action.value
		// 返回出去的数据, 返回给了 store, 会拿新的数据替换掉旧的数据
		// 注意 外面一定要有 return state, 因为不做任何操作的时候, 也得把 reducer 中的数据传给 store
		return newState
	}
	if (action.type === ADD_ITEM) {	
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.inputValue)
		newState.inputValue = ''
		console.log('11', newState);
		
		return newState
	}
	if (action.type === ITEM_DELETE) {
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index, 1)
		return newState
	}
	return state
}
