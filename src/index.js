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
