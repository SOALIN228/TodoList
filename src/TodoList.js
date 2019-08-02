import React, {Component} from 'react'
import axios from 'axios'
import store from './store'
import {initListAction, getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
// import TodoItem from './TodoItem'
import TodoListUI from './TodoListUI'
import 'antd/dist/antd.css'
import './style.css'

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
    axios.get('/list.json').then((res) => {
      const data = res.data
      const action = initListAction(data)
      store.dispatch(action)
    })
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

// class TodoList extends Component {
//
//   // constructor 在组件创建时执行
//   constructor (props) {
//     super(props)
//
//     this.handleInputChange = this.handleInputChange.bind(this)
//     this.handleKeyUp = this.handleKeyUp.bind(this)
//     this.handleItemClick = this.handleItemClick.bind(this)
//     // 数据写在state中
//     this.state = {
//       inputValue: '',
//       list: []
//     }
//   }
//
//   handleInputChange (e) {
//     // const value = e.target.value
//     const value = this.input.value // 使用ref获取dom操作
//     this.setState(() => ({
//       inputValue: value
//     }))
//   }
//
//   handleKeyUp (e) {
//     if (e.keyCode === 13 && e.target.value !== '') {
//       this.setState((prevState) => ({
//         list: [...prevState.list, prevState.inputValue],
//         inputValue: ''
//       }))
//     }
//   }
//
//   handleItemClick (index) {
//     this.setState((prevState) => {
//       const list = [...prevState.list]
//       list.splice(index, 1)
//       return {
//         list
//       }
//     })
//   }
//
//   getListItems () {
//     // 父子组件的概念
//     // 父组件通过的形式向子组件传值
//     return this.state.list.map((value, index) => {
//       return (
//         <TodoItem key={index}
//                   content={value}
//                   index={index}
//                   deleteFunction={this.handleItemClick}
//         />
//       )
//     })
//   }
//
//   componentDidMount () {
//     axios.get('/api/todolist').then((res) => {
//       console.log(res.data)
//       this.setState(() => ({
//         list: [...res.data]
//       }))
//     })
//   }
//
//   render () {
//     return (
//       <Fragment>
//         {/*这是注释*/}
//         <label htmlFor={'insertArea'}>请输入内容：</label>
//         <input className={'input'}
//                id={'insertArea'}
//                value={this.state.inputValue}
//                onChange={this.handleInputChange}
//                onKeyUp={this.handleKeyUp}
//                ref={(input) => {
//                  this.input = input
//                }}
//         />
//         <ul>
//           {this.getListItems()}
//         </ul>
//       </Fragment>
//     )
//   }
// }
