import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// combineReducers 是 redux 提供的一个合并 reducer 的方法
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
