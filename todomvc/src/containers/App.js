import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

const App = ({todos, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
const mapStateToProps = state => ({
  todos: state.todos
})

// 哪些 action 创建函数是我们想要通过 props 获取的？
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  // 一个对象，对象的键是该组件的prop属性
  mapStateToProps,
  // 一个函数，返回一个对象，对象的键同样是prop的属性名，值是一个redux的dispatch，当这个prop属性被用于触发时，dispatch会改变redux中state的值
  mapDispatchToProps
)(App)
