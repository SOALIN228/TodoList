# TodoList

## 学到的知识

1. constructor 在组件创建时执行，类似Vue的 create 生命周期
2. 数据写在state中，类似Vue的data
3. React的数据和方法要写在{}，这是JSX语法
4. 方法要使用bind绑定this，因为在render中this指向组件，但是在方法中this默认不指向组件
5. 使用 this.setState 完成对数据的操作，实现数据驱动
6. 因为组件中使用ES6 class创建，所以样式使用className，避免class冲突
7. this的bind每次执行时都会绑一次，为了提高性能可以在constructor进行绑定，这样只会绑定一次，但是只适合不传参数的方法
8. ul中的遍历看着很复杂，可以封装成一个方法，使用JSX进行解析，方便阅读
9. JSX 中的注释 {/* 这是注释 */}
10. 在JSX中的所有内容都拿 {} 包一下就好，方便解析
11. 使用dangerouslySetInnerHTML={{__html: value}} 可以禁止将标签进行转义，按照html格式进行解析

