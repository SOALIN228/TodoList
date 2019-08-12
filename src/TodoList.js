import React, { Component } from 'react'
import store from './store'
import {
  getTodoList,
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import 'antd/dist/antd.css'

class TodoList extends Component {

  constructor (props) {
    super(props)
    this.state = store.getState() // 获取store数据
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange) // store改变时执行
  }

  handleStoreChange () {
    this.setState(store.getState()) // 重新加载store中数据
  }

  handleInputChange (e) {
    const action = getInputChangeAction(e.target.value) // 创建一个action
    store.dispatch(action) // 将action派发给reducers
  }

  handleBtnClick () {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete (index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  componentDidMount () {
    const action = getTodoList()
    store.dispatch(action)
  }

  render () {
    return (
      <TodoListUI inputValue={this.state.inputValue}
                  list={this.state.list}
                  handleInputChange={this.handleInputChange}
                  handleBtnClick={this.handleBtnClick}
                  handleItemDelete={this.handleItemDelete}
      />
    )
  }
}

export default TodoList
