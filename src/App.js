import React, {Component, Fragment} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './style.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }

  render () {
    return (
      <Fragment>
        {/*<div className={this.state.show ? 'show' : 'hide'}>hello</div>*/}
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
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }
}

export default App
