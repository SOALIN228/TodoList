import React from 'react'
import {connect} from 'react-redux'
import {ChangeInputValue, AddItem, DeleteItem} from './store/actionType'

const TodoList = (props) => {
  const { inputValue, list, handleInputChange, handleClick, handleDelete } = props

  return (
    <div>
      <div>
        <input type="text"
               value={inputValue}
               onChange={handleInputChange}
        />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index} onClick={handleDelete.bind(this, index)}
              >{item}</li>
            )
          })
        }
      </ul>
    </div>
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
      const action = {
        type: ChangeInputValue,
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick () {
      const action = {
        type: AddItem
      }
      dispatch(action)
    },
    handleDelete (index) {
      const action = {
        type: DeleteItem,
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList) // connect使TodoList和store连接
