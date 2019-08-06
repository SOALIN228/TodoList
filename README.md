# TodoList

## 学到的知识

1. constructor 在组件创建时执行，类似Vue的 create 生命周期

2. 数据写在state中，类似Vue的data

3. React的数据和方法要写在{}，这是JSX语法

4. 方法要使用bind绑定this，因为在render中this指向组件，但是在方法中this默认不指向组件

5. 使用Fragment在render中进行包裹，类似Vue的template，因为最外层只能有一个标签

6. 使用 this.setState 完成对数据的操作，实现数据驱动

7. 因为组件中使用ES6 class创建，所以样式使用className，避免class冲突

8. this的bind每次执行时都会绑一次，为了提高性能可以在constructor进行绑定，这样只会绑定一次，但是只适合不传参数的方法

9. ul中的遍历看着很复杂，可以封装成一个方法，使用JSX进行解析，方便阅读

10. style 写法

    ```react
    style={{ marginTop: '10px', marginLeft: '10px' }} // 两种写法
    
    style={{ marginTop: 10, width: 300 }}
    ```

11. JSX 中的注释 {/* 这是注释 */}

12. 在JSX中的所有内容都拿 {} 包一下就好，方便解析

13. 使用dangerouslySetInnerHTML={{__html: value}} 可以禁止将标签进行转义，按照html格式进行解析

14. 我们可以将组件进行拆分，方便复用

15. 父子通信
    - 父组件将数据和方法传递给子组件，子组件通过this.props接收父组件传递的值
    - 父组件传递方法中的this，应该指向父组件，因为数据的具体操作应该由父组件控制，避免在子组件中修改父组件的值

16. render函数在创建时会执行一次，每次state或props改变时，再次执行render进行页面渲染，从而实现数据驱动页面

17. 通过ref来操作DOM
    - 在html标签上，获取的是DOM节点 `ref={(button) => {this.buttonElem = button}}` 然后通过this.buttonElem 就可以获取DOM
    - 在组件上，获取的是js实例
    - 操作dom要在setState的第二个方法中调用，因为setState是异步的 

18. setState 是异步的
    ```javascript
    this.setState = { // 没有办法在数据更新后执行逻辑
      counter
    }
    console.log('数据没有更新就执行了')
    
    this.setState(() => { // 另一种写法
      return {
        counter
      }
    }, () => {
      console.log('数据更新后执行')
    })
    // 推荐使用异步的方式操作数据
    // 使用prevState来代替this.state,避免操作失误
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
    ```

19. PropTypes 类型检查

    ```react
    import PropTypes from 'prop-types' // 引入
    
    TodoItem.propTypes = { // 类型检测
      test: PropTypes.string.isRequired, // 必填
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 多种类型
      deleteItem: PropTypes.func, // 类型为方法
      index: PropTypes.number
    }
    
    TodoItem.defaultProps = { // 设置默认值
      test: 'hello world'
    }
    ```

20. 生命周期函数指的是组件在某一时刻会自动执行的函数

    **挂载**

    1. constructor() 

       初始化时执行，只会执行一次

    2. static getDerivedStateFromProps(props, state) 

       在render()之前执行，每次数据变化时都会执行，返回一个对象来更新 state

    3. componentWillMount() 

       在render()挂载之前执行，只会执行一次，**被废弃**

    4. render() 

       每次数据发生变化执行

    5. componentDidMount()

       在render()挂载之后执行，只会执行一次

    **更新**

    1. static getDerivedStateFromProps(props, state)

       在render()之前执行，每次数据变化时都会执行，返回一个对象来更新 state

    2. componentWillReceiveProps()

       子组件要从父组件接收参数，只要父组件的render函数被重新执行(第二次及以上)，子组件的这个生命周期函数就会被执行，**已废弃**

    3. shouldComponentUpdate()

       每次更新时执行，如果返回false，后面的生命周期函数都不会执行，可以在某些情况下避免重复渲染页面

    4. componentWillUpdate()

       在render()更新之前执行，**已废弃** 

    5. render()

       更新数据

    6. getSnapshotBeforeUpdate()

       在最近一次渲染输出（提交到 DOM 节点）之前调用。在发生更改之前从 DOM 中捕获信息,返回值将作为参数传递给componentDidUpdate(),不常用

    7. componentDidUpdate()

       更新后被调用

    **卸载**

    1. componentWillUnmount()

       组件卸载及销毁之前直接调用

    **错误**

    1. static getDerivedStateFromError(error)

       在后代组件抛出错误后被调用，并返回一个值以更新 state

    2. componentDidCatch(error, info)

       在后代组件抛出错误后被调用

21. 使用charles模拟请求的返回数据，做数据mock

22. 使用react-transition-group动画库做一些动画，具体读文档

    ```react
    <CSSTransition in={this.state.show} // 控制显示
                   timeout={1000} // 控制时间
                   classNames={'fade'} // 名字
                   unmountOnExit // 动画结束移除dom
                   onEntered={(el) => {el.style.color = 'blue'}} // 控制动画的js钩子
                   appear={true} // 页面第一次打开是否显示
    >
      <div>hello</div>
    </CSSTransition>
    ```

    ```css
    .fade-enter,
    .fade-appear {
        opacity: 0;
    }
    
    .fade-enter-active,
    .fade-appear-active {
        opacity: 1;
        transition: opacity 1s ease-in;
    }
    
    .fade-enter-done {
        opacity: 1;
    }
    
    .fade-exit {
        opacity: 1;
    }
    
    .fade-exit-active {
        opacity: 0;
        transition: opacity 1s ease-in;
    }
    
    .fade-exit-done {
        opacity: 0;
    }
    ```

23. TransitionGroup 实现列表动画

    ```react
    <TransitionGroup>
      {
        this.state.list.map((item, index) => {
          return (
            <CSSTransition timeout={1000}
                           classNames={'fade'}
                           unmountOnExit
                           onEntered={(el) => {
                             el.style.color = 'blue'
                           }}
                           appear={true}
                           key={index}
            >
              <div>{item}</div>
            </CSSTransition>
          )
        })
      }
    </TransitionGroup>
    ```

24. redux

    ```react
    // 配置reducer
    const defaultState = { // 默认数据集
      inputValue: '123',
      list: [1, 2]
    }
    
    export default (state = defaultState, action) => { // 将默认数据注入到state
      return state
    }
    
    // 配置store
    import {createStore} from 'redux'
    import reducer from './reducer'
    
    const store = createStore(reducer) // 引入reducer
    export default store
    ```

    ```react
    // 使用redux
    import store from './store' // 引入
    
    constructor (props) {
      super(props)
      this.state = store.getState() // 导入数据
    }
    
    <Input value={this.state.inputValue} style={{ width: '300px', marginRight: '10px' }}/> // 使用数据
    ```

25. redux数据更新

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

26. 拆分actionType可以帮助我们配置事件，快速查找定位错误，而用字符串拼写错误不会提示

27. 使用actionCreator统一管理action，方便自动换测试和维护

28. reducer 可以接受state，但是不能修改state，不要写有副作用的函数

29. 组建拆分，容器组件负责逻辑，UI组件负责渲染，UI组件中所以逻辑都来自于容器组件

30. 如果UI组件中不需要使用逻辑、生命周期,使用无状态组件会更高效

31. 使用redux-thunk中间件，可以将ajax移动到actionCreators中，变成异步调用，还会方便后续测试和管理

32. 使用redux-sage中间件，效果同上








