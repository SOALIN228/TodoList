## 动画

1. 使用react-transition-group动画库做一些动画，具体读文档

   ```react
   import { CSSTransition } from 'react-transition-group'
   
   <CSSTransition in={this.state.show} // 控制样式是否显示
                  timeout={1000} // 控制时间
                  classNames={'fade'} // 过渡动画名字
                  unmountOnExit // 动画结束移除dom
                  onEntered={(el) => {el.style.color = 'blue'}} // 控制动画的js钩子
                  appear={true} // 页面第一次打开是否显示
   >
     <div>hello</div>
   </CSSTransition>
   ```

   `fade-enter`: 入场动画执行的第一个时刻

   `fade-enter-active`: 入场动画执行的第二个时刻到结束

   `fade-enter-done`：入场动画执行完成

   `fade-exit`: 出场动画执行的第一个时刻

   `fade-exit-active`: 出场动画执行的第二个时刻到结束

   `fade-exit-done`: 出场动画执行完成

   `fade-appear`: 第一次进入页面的第一个时刻默认执行

   `fade-appear-active`:第一次进入页面的第二个时刻到结束默认执行

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

2. TransitionGroup 实现列表动画

   ```react
   import { CSSTransition, TransitionGroup } from 'react-transition-group'
   
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

