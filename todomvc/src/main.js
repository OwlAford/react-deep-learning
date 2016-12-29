import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'

// 为应用创建一个 store 管理 state
const store = createStore(reducer)

// 通过 provider 组件将 store 注入应用
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
