import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

  shouldComponentUpdate (nextProps, nextState, nextContext) { // 性能优化，子组件数据不变时，阻止页面重新渲染
    return nextProps.content !== this.props.content;
  }

  render () {
    // 接收父组件传递的值
    const { content } = this.props
    return (
      <li onClick={this.handleItemClick}
      >{content}</li>
    )
  }
}

TodoItem.propTypes = { // 类型检测
  test: PropTypes.string.isRequired, // 必填
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 多种类型
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = { // 设置默认值
  test: 'hello world'
}

export default TodoItem
