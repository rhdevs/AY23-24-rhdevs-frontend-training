import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { exampleStore } from './example/reducer'
import { playground } from './playground/reducer'
import { vedStore } from './Ved/reducer'

export const rootReducer = combineReducers({
  exampleStore,
  vedStore,
  playground,
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
