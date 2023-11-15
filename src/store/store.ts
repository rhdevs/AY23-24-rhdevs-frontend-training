import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { exampleStore } from './example/reducer'
import { playground } from './playground/reducer'
import { vikramgoyalStore } from './VikramGoyalRedux/reducer'

export const rootReducer = combineReducers({
  exampleStore,
  playground,
  vikramgoyalStore,
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
