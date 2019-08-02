import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import todoSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore( // 引入reducer
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(todoSaga)

export default store
