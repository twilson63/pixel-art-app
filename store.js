import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import currentColor from './reducers/current-color'
import board from './reducers/board'

const store = createStore(
  combineReducers({
    currentColor,
    board
  }),
  applyMiddleware(thunk)
)

export default store