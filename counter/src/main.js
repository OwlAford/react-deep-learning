import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

// 为应用创建 store 管理 state
const store = createStore(counter)
const rootEl = document.getElementById('root')

// render 方法渲染 counter 组件
const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
// subscribe接收一个回调(listener), 
// 当dispatch触发时, 执行reducer函数去修改当前数据，
// 然后执行回调函数
store.subscribe(render)
