import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import topHomeReducer from '../reducers/topHomeReducer'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  topHomeReducer,
  applyMiddleware(sagaMiddleware))

export default store;

sagaMiddleware.run(sagas)
