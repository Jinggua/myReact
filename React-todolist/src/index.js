// 整个程序的运行入口. 代码入口

import React from 'react';
import ReactDOM from 'react-dom';
// react-dom 是一个第三方模块, 有一个 render 方法,把组件挂载到 dom 节点上

/*
 入口文件 index.js, 引入 APP.js 文件, APP这个文件显示出了 DOM 结构
 大写字母开头的都是组件.
 */
// import TodoList from './App';
import TodoList2 from './TodoList2';
// 只要使用了 jsx, 就必须引入 react
ReactDOM.render(<TodoList2 />, document.getElementById('root'));
