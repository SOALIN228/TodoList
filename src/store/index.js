import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer) // 引入reducer
export default store
