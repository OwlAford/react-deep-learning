import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  // 通过ref获取节点，并保存在 input
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// 将组件和 Redux store 进行连接
// 连接操作不会改变原来的组件类，反而返回一个新的已与 Redux store 连接的组件类
AddTodo = connect()(AddTodo)

export default AddTodo
