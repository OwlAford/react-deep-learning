// 设置第一个 todo id 为 0
let nextTodoId = 0

// 添加 todo 的 action
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

// 设置过滤 action
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

// 设置切换 action
export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
})
