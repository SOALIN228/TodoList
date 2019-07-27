import React, {Component, Fragment} from 'react'

class TodoList extends Component {

  // constructor 在组件创建时执行
  constructor (props) {
    super(props)
    // 数据写在state中
    this.state = {
      inputValue: '',
      list: ['1', '2']
    }
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleKeyUp (e) {
    if (e.keyCode === 13) {
      const list = [...this.state.list, this.state.inputValue]
      this.setState({
        list,
        inputValue: ''
      })
    }
  }

  handleItemClick (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  render () {
    return (
      <Fragment>
        <input value={this.state.inputValue}
               onChange={this.handleInputChange.bind(this)}
               onKeyUp={this.handleKeyUp.bind(this)}
        />
        <ul>
          {
            this.state.list.map((value, index) => {
              return (
                <li key={index} onClick={this.handleItemClick.bind(this, index)}>
                  {value}
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList
