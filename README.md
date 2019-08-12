## Redux

解决复杂组件间的共享数据和数据传值的问题

### 工作流程

![1565580950397](C:\Users\SOALIN\AppData\Roaming\Typora\typora-user-images\1565580950397.png)

ReactComponents：负责发起请求，告知要获取的数据和类型

ActionCreators：负责将ReactComponents请求的数据和类型发送给store

Store：Store是一个管理者，负责接收ActionCreators的请求，在Reducers中查到需要的数据，返回给ReactComponents

Reducers：Reducers是一个数据仓库，所有的数据都存储在Reducers中，负责接收Store的请求并返回给Store需要的数据

修改数据也是同理



### 配置Redux

```javascript
// 配置store
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer) // 引入reducer
export default store
```

```javascript
// 配置reducer
const defaultState = { // 默认数据集
  inputValue: '123',
  list: [1, 2]
}

// state是仓库数据，action是请求
export default (state = defaultState, action) => { // 将默认数据注入到state
  return state
}
```

### 获取Redux数据 

```react
// 使用redux
import store from './store' // 引入

constructor (props) {
  super(props)
  this.state = store.getState() // 导入数据
}

<Input value={this.state.inputValue}/> // 使用数据
```

### 更新Redux数据

对数据的操作**一定要使用新拷贝的数据**，因为只有store能够改变自己的内容，reducers只是将新的数据返回给store，所以不要在reducers中改变数据

```react
// constructor
store.subscribe(this.handleStoreChange) // store改变时执行

handleStoreChange () {
  this.setState(store.getState()) // 重新加载store中数据
}

handleInputChange (e) {
 const action = { // 创建一个action
   type: 'change_input_value',
   value: e.target.value
 }
 store.dispatch(action) // 将action传递给reducers
}
// reducer.js
if (action.type === 'change_input_value') { // 监听action变化，进行store的更新
  const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
  newState.inputValue = action.value
  return newState // 将数据返回给store
}
```

### 使用Redux devTools

```javascript
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore( // 引入reducer
  reducer,
  // 使用浏览器插件
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
```

### 使用actionType

使用actionType将type类型设置为常量，可以帮助我们配置事件，快速查找定位错误，而用字符串拼写错误不会提示

### 使用actionCreators

使用actionCreator统一管理action，方便自动换测试和维护

### 组件拆分

**容器组件负责逻辑**，**UI组件负责渲染**，UI组件中所以逻辑都来自于容器组件

如果要在UI组件中将函数需要的参数传递给容器组件，要使用箭头函数，避免因为this影响结果

```react
<List style={{ marginTop: 10, width: 300 }}
      bordered
      dataSource={props.list}
      renderItem={(item, index) => (
        <List.Item onClick={() => {
            props.handleItemDelete(index)
          }}>{item}</List.Item>
      )}
/>
```

如果UI组件中不需要使用逻辑、生命周期,可以使用**无状态组件**

**无状态组件的优点是性能更好**

```react
const TodoListUI = (props) => { // props接收父组件传递过来的参数
  return (
  <div></div>
  )
}

export default TodoListUI
```

### Redux中间件原理

就是对dispatch的升级，原来只可以接收一个对象，升级对象后可以接收函数和对象

### Redux-thunk

使用redux-thunk中间件，可以将ajax方法移动到actionCreators中，变成异步调用，还会方便后续测试和管理

```javascript
// index.js
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)

const store = createStore( // 引入reducer
  reducer,
  enhancer
)

export default store
```



### 总结

1. store是唯一的，全局都在使用一个store

2. 只有store能够改变自己的内容，reducers只是将新的数据返回给store，所以不要在reducers中改变数据
3. reducer 要是纯函数，给固定的输入，返回固定的输出，而且不会有副作用的函数










