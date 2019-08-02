const defaultState = { // 数据集
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') { // 监听action变化，进行store的更新
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.inputValue = action.value
    return newState // 将数据返回给store
  }
  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === 'delete_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}
