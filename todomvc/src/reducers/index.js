import { combineReducers } from 'redux'
import todos from './todos'

// 合并 reducers
const rootReducer = combineReducers({
  todos
})

export default rootReducer
