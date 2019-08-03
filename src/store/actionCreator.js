import {ChangeInputValue, AddItem, DeleteItem} from './actionType'

export const changeInputValueAction = (value) => ({
  type: ChangeInputValue,
  value
})
export const addItemAction = () => ({
  type: AddItem
})
export const deleteItemAction = (index) => ({
  type: DeleteItem,
  index
})
