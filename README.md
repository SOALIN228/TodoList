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

10. JSX 中的注释 {/* 这是注释 */}

11. 在JSX中的所有内容都拿 {} 包一下就好，方便解析

12. 使用dangerouslySetInnerHTML={{__html: value}} 可以禁止将标签进行转义，按照html格式进行解析

13. 我们可以将组件进行拆分，方便复用

14. 父子通信
    - 父组件将数据和方法传递给子组件，子组件通过this.props接收父组件传递的值
    - 父组件传递方法中的this，应该指向父组件，因为数据的具体操作应该由父组件控制，避免在子组件中修改父组件的值

15. render函数在创建时会执行一次，每次state或props改变时，再次执行render进行页面渲染，从而实现数据驱动页面

16. 通过ref来操作DOM
    - 在html标签上，获取的是DOM节点 `ref={(button) => {this.buttonElem = button}}` 然后通过this.buttonElem 就可以获取DOM
    - 在组件上，获取的是js实例

17. setState 是异步的
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

18. PropTypes 类型检查

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

19. 生命周期函数指的是组件在某一时刻会自动执行的函数

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

       在组件收到新的props之前会被调用，所以只有在子组件中才会被调用，第一次存在父组件中不会执行，已经存在父组件中才会执行，**已废弃**

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

20. 使用charles模拟请求的返回数据，做数据mock



