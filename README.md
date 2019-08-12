## Redux-saga

使用redux-saga同redux-thunk很相似，也是可以使dispatch接收函数，不同的是thunk是将函数同方法一样写在actionCreators中，saga是将所以异步请求写在单独的文件中，通过使用generator函数来实现异步，在大型项目中saga会更好

### 配置redux-saga

```javascript
// index.js
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore( // 引入reducer
  reducer,
  enhancer
)

sagaMiddleware.run(todoSaga)

export default store
```



```javascript
// sagas.js 要使用generator函数
import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList () {
  try {
    const res = yield axios.get('/list.json')
    const action = initListAction(res.data)
    yield put(action)
  } catch (e) {
    console.log('网络请求失败！')
  }
}

function* todoSaga () {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default todoSaga
``
