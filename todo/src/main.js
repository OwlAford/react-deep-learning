import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

// 为每个应用创建唯一的 store
const store = createStore(reducer)

// 通过 provider 将 store 注入应用
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
