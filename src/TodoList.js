import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {

  // constructor 在组件创建时执行
  constructor (props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    // 数据写在state中
    this.state = {
      inputValue: '',
      list: []
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
    // 父子组件的概念
    // 父组件通过的形式向子组件传值
    return this.state.list.map((value, index) => {
      return (
        <TodoItem content={value}
                  key={index}
                  deleteFunction={this.handleItemClick}
        />
      )
    })
  }

  static getDerivedStateFromProps () {
    console.log('getDerivedStateFromProps')
    return false
  }

  // componentWillMount () {
  //   console.log('componentWillMount')
  // }

  componentDidMount () {
    console.log('componentDidMount')
  }

  render () {
    console.log('render')
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
