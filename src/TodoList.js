import React, {Component, Fragment} from 'react'
import './style.css'

class TodoList extends Component {

  // constructor 在组件创建时执行
  constructor (props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
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
    if (e.keyCode === 13 && e.target.value !== '') {
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

  getListItems () {
    return this.state.list.map((value, index) => {
      return (
        <li key={index} onClick={this.handleItemClick.bind(this, index)}
            dangerouslySetInnerHTML={{__html: value}}
        >
        </li>
      )
    })
  }

  render () {
    return (
      <Fragment>
        {/*这是注释*/}
        <label htmlFor={'myinput'}>请输入内容：</label>
        <input className={'input'}
               id={'myinput'}
               value={this.state.inputValue}
               onChange={this.handleInputChange}
               onKeyUp={this.handleKeyUp}
        />
        <ul>
          {this.getListItems()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList
