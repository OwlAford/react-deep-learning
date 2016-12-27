// 列表显示过滤，默认全部显示
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
  	case 'SET_VISIBILITY_FILTER':
  	  return action.filter
  	default:
  	  return state
  }
}

export default visibilityFilter