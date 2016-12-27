// 单个 todo
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }

    case 'TOGGLE_TODO':
      // 若切换的 todo 不是对应的 todo，直接返回 state
      if (state.id !== action.id) {
        return state
      }
      // 若切换的为对应的 todo ，则对当前 todo 的状态进行切换
      return {
        ...state,
        completed: !state.completed
      }

  }
}

// 多个 todos
const todos = (state = [], action) => {
  switch (action.type) {
    // 添加新的 todo 到 todos 队列中
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    // 全局切换 todos
    case 'TOGGLE_TODO':
      // 遍历 state 数组，为对应 todo 进行状态切换
      return state.map(
        t => todo(t, action)
      )
    default:
      return state  
  }
}

export default todos