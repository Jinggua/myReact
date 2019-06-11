// 必须只有一个 store
// 这个就是 store ,虽然取名为 index.js, 但是这是 store 的文件
// 从 redux 中引入一个方法
import { createStore } from 'redux'
// 引入'笔记本'  
import reducer from './reducer'

// 创建 store 并且把 reducer 传给 store, 创建数据的公共存储仓库
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;