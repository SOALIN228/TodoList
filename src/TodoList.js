import React, {Component, Fragment} from 'react'

class TodoList extends Component {

  // constructor 在组件创建时执行
  constructor (props) {
    super(props)
    // 数据写在state中
    this.state = {
      inputValue: 'hello world',
      list: []
    }
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render () {
    return (
      <Fragment>
        <input value={this.state.inputValue}
               onChange={this.handleInputChange.bind(this)}
        />
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </Fragment>
    )
  }
}

export default TodoList
