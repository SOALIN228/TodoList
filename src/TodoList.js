import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {

  // constructor 在组件创建时执行
  constructor (props) {
    super(props)
    // 数据写在state中
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  handleInputChange (e) {
    const value = e.target.value
    // const value = this.input.value // 使用ref获取dom操作
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick () {
    if (this.state.inputValue !== '') {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }))
    }
  }

  handleItemDelete (index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }

  getListItems () {
    // 父子组件的概念
    // 父组件通过的形式向子组件传值
    return this.state.list.map((value, index) => {
      return (
        <TodoItem key={index}
                  content={value}
                  index={index}
                  deleteFunction={this.handleItemDelete}
        />
      )
    })
  }

  render () {
    return (
      <Fragment>
        {/*这是注释*/}
        <label htmlFor={'insertArea'}>请输入内容：</label>
        <input className={'input'}
               id={'insertArea'}
               value={this.state.inputValue}
               onChange={this.handleInputChange}
               ref={(input) => {
                 this.input = input
               }}
        />
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          {this.getListItems()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList
