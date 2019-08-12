import React from 'react'
import { Button, Input, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <div>
        <Input value={props.inputValue}
               placeholder={'todo'}
               style={{ width: '300px', marginRight: '10px' }}
               onChange={props.handleInputChange}
        />
        <Button type="primary"
                onClick={props.handleBtnClick}
        >提交</Button>
      </div>
      <List style={{ marginTop: 10, width: 300 }}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item onClick={() => {
                props.handleItemDelete(index)
              }}>{item}</List.Item>
            )}
      />
    </div>
  )
}

export default TodoListUI
