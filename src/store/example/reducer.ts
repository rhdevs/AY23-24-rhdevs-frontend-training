import { Reducer } from 'redux'
import { ActionTypes, SHOPPING_LIST_ACTIONS } from './types'

//set an initial state for your variable
const initialState = {
  val: 1,
}

//declare your variable type
type State = {
  val: number
}

export const exampleStore: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case SHOPPING_LIST_ACTIONS.INCREMENT: {
      return { ...state, val: action.val }
    }
    default:
      return state
  }
}
