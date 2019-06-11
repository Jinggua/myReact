/*
声明周期函数: 是指在某一个时刻, 组件会自动调用执行的函数
render 函数, 当 state 和 props 发生改变的时候, render 函数就会自动执行.
constructor 是 class 自带的, 所以不归到生命周期函数中,但是他的表现和生命周期函数差不多, 
在组件创建的时候被创建的时候调用.
*/ 

Initialization  初始化阶段, 初始化 props 和 state, 在 constructor 中初始化
// setup props and state

(一) Mounting  挂载阶段(组件第一次被渲染到页面上的时候)

// componentWillMount 在组件即将被挂在到页面的时刻自动执行.  在 render 之前执行. (只会在第一次挂载时执行)
componentWillMount() {
    console.log('componentWillMount');
    
}

render() {

}
// componentDidMount 在组件挂载到页面之后自动执行.  在 render 之后执行.  (只会在第一次挂载时执行)

componentDidMount() {
    console.log('componentDidMount');
    
}


(二) Updation 更新阶段, 要么 props 发生变化, 要么 state 发生变化.


// shouldComponentUpdate 组件被更新之前. 会被自动执行, 
// shouldComponentUpdate 需要返回一个 bool 类型的返回结果
shouldComponentUpdate(nextProps, nextState) {
    
}

// 组件被更新之前, 它会被自动执行, 但是它在 shouldComponentUpdate 之后被执行.
//如果 shouldComponentUpdate 返回 true, 它才执行
//如果 shouldComponentUpdate 返回 false, 它不执行
componentWillUpdate() {
    
}

// componentWillUpdate 执行之后. redder 函数会被执行.
render() {

}

// 组件更新完成之后, 它会被执行
componentDidUpdate() {
    
}

// 一个组件要从服组件接受参数
// 如果这个组件第一次存在于父组件中(第一次渲染到父组件中), 这个函数不会执行
// 如果这个组件之前存在于父组件中, 才会执行
componentWillReceiveProps(nextProps) {
    
}


Unmounting
// 当这个组件即将被从页面中剔除的时候, 会被执行.
componentWillUnmount() {
    
}




/*
    虚拟 dom
    
    1 state 数据
    2 jsx 模板 
    3 数据 + 模板 结合, 生成真实 Dom, 来显示
    4 state 发生改变, 
    5 数据 + 模板 结合, 生成真实 Dom, 来显示

    缺陷: 第一次生成了完整的 DOM 片段, 第二次有生成了完整的 DOM 片段,
    第二次完整的 DOM 片段替换第一次 DOM, 非常耗性能


    改进: 
    1 state 数据
    2 jsx 模板 
    3 数据 + 模板 结合, 生成真实 Dom, 来显示
    4 state 发生改变, 
    5 数据 + 模板 结合, 生成真实 Dom, 来显示, 并不直接替换原始 DOM
    6 新的 DOM 和原始的 DOM 做比对, 找差异
    7 找出 DOM 中发生变化的部分
    8 用新的发生变化的 DOM 替换老的 DOM 中的部分

    缺陷: 性能的提升并不明显

    改进: js 比较对象不耗性能, 但是比较 DOM 很耗性能
    1 state 数据
    2 jsx 模板(jsx -> JS 对象 -> 真实的 DOM)
    3 生成虚拟 DOM(虚拟 DOM就是一个 JS 对象, 用它来描述真实 DOM)
    <div id='abc'><span>hello world</span></div>
    ['div', {id: 'abc'}, ['span', {}, 'hello world']]
    4  用虚拟 DOM 的结构生成真实 Dom, 来显示
    5 state 发生变化
    6 数据+模板生成新的虚拟 DOM(极大的提升了性能)
    ['div', {id: 'abc'}, ['span', {}, 'bye bye']]
    7 比较原始虚拟 DOM 和原始的虚拟 DOM 的区别
    8 直接操作 DOM, 改变 span 中的内容

    有点: 
    1 性能提升
    2 它使得跨端应用得意实现, React.Native
*/ 


/*
    虚拟 DOM 中的 Diff 算法 (同层比对)
    比较原始虚拟 DOM 和原始的虚拟 DOM 的区别, 如何比对的就叫 Diff 算法
    比如短时间连续 3 次 setState, 那么 react 会合并成一次虚拟 DOM 的比对(所以 setState 设计成异步的)
    同层比较: 第一层对比, 如果相同, 进行下一层的对比, 如果不同, 则把下面所有节点的 DOM 都删除掉,
    重新生成下面节点的 DOM, 替换原始页面的 DOM
*/




