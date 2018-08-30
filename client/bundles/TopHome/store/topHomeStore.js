import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import topHomeReducer from '../reducers/topHomeReducer'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

function configDevStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    topHomeReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  )
}

function configProdStore() {
  return createStore(
    topHomeReducer,
    applyMiddleware(sagaMiddleware)
  )
}

export default process.env.RAILS_ENV == "development" ? configDevStore() : configProdStore()

sagaMiddleware.run(sagas)
