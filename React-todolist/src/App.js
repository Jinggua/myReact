import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

/*
  等价于
  import React from 'react';
  const Component = React.Component
*/ 


/*
    import React from 'react';
    class App extends React.Component
 */

/* 定义一个React组件, 就是定义一个类, 必须继承 React.Component, 就变成了一个 React 组件, 
组件里面必须render 方法, 这个函数负责这个组件要显示的内容, 也就是 return 出去的内容.
 */
class App extends Component {
  // jsx
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  handleClick = () => {
    this.setState(() => ({
      show: !this.state.show
    }))
  }
  
  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleClick}>toggle</button>
      </Fragment>
    );
  }
}
// 导出组件, 导出组件, 别的地方才能导入组件.
export default App;
