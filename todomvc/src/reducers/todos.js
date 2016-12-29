import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

// 初始状态数据
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

// todo 相关的 reducer
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          // 先传入 -1 作为初始的maxId，
          // 通过数组reduce和Math.max方法遍历比对获取state中id的最大值
          // 并在原基础上 +1
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]

    case DELETE_TODO:
      // 通过数组的filter方法筛选出不匹配id的todo返回新的todo列表
      // 这样就实现了删除的效果
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      // 遍历state里的todo，将匹配id的todo的新的text值覆盖保存
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case COMPLETE_TODO:
      // 遍历state里的todo，将匹配的todo标记完成状态进行反转
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case COMPLETE_ALL:
      // every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
      // every() 方法使用指定函数检测数组中的所有元素：
      // 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
      // 如果所有元素都满足条件，则返回 true。

      // 此处先判断元素是否全部标记激活。
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      // 清除全部完成，即返回一个新的未完成数组  
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
