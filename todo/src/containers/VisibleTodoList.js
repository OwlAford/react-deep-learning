import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'


// 通过数组的 filter 方法过滤符合验证规则的条目
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// 组件通过 props 获取可显示的 todo 列表
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

// 组件通过 props 获取每个子条目用于切换状态的点击方法
const mapDispatchToProps =  ({
  onTodoClick: toggleTodo
})

// 将 mapStateToProps 和 mapDispatchToProps 连接到组件
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
