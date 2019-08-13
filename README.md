## React-redux

## Provider

Provider和store相关联，使得Provider内部的组件都可以获取到store中的数据

```react
import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'

const App = (
  <Provider store={store}> {/*使每个组件都可以使用store*/}
    <TodoList/>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'))
```

## connect

connect使TodoList和store连接，从而操作store中的数据

mapStateToProps将store中数据和props做关联，一般用来获取store中的数据

mapDispatchToProps将store中dispatch和props做关联，一般用来操作数据

数据变化，页面会自动发升变化

```react
import React from 'react'
import { connect } from 'react-redux'
import { changeInputValueAction, addItemAction, deleteItemAction } from './store/actionCreator'

const TodoList = (props) => {
  const { inputValue, list, handleInputChange, handleClick, handleDelete } = props

  return (
    <div></div>
  )
}

const mapStateToProps = (state) => { // 将store中数据和props做关联
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => { // 将store中dispatch和props做关联
  return {
    handleInputChange (e) {
      const action = changeInputValueAction(e.target.value)
      dispatch(action)
    },
    handleClick () {
      const action = addItemAction()
      dispatch(action)
    },
    handleDelete (index) {
      const action = deleteItemAction(index)
      dispatch(action)
    }
  }
}

// connect使TodoList和store连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
```