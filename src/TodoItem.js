import React, {Component} from 'react'

class TodoItem extends Component {

  constructor (props) {
    super(props)

    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick () {
    // 改变父组件的list
    // 子组件和父组件通信，调用父组件传递的方法，注意方法中的this应该指向父组件
    const { deleteFunction, index } = this.props
    deleteFunction(index)
  }

  render () {
    // 接收父组件传递的值
    const { content, index } = this.props
    return (
      <li key={index}
          onClick={this.handleItemClick}
      >{content}</li>
    )
  }
}

export default TodoItem
