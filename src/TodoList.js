import React, {Component, Fragment} from 'react'
// import axios from 'axios'
import store from './store'
// import TodoItem from './TodoItem'
import {Input, Button, List} from 'antd'
import 'antd/dist/antd.css'
import './style.css'

class TodoList extends Component {

  constructor (props) {
    super(props)
    this.state = store.getState()
  }

  render () {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input value={this.state.inputValue} placeholder={'todo'} style={{ width: '300px', marginRight: '10px' }}/>
          <Button type="primary">提交</Button>
        </div>
        <List style={{ marginTop: 10, width: 300 }}
              bordered
              dataSource={this.state.list}
              renderItem={item => (
                <List.Item>{item}</List.Item>
              )}
        />
      </div>
    )
  }
}

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

export default TodoList
