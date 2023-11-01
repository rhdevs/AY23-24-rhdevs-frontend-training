import { Reducer } from 'redux'
import { ActionTypes, PLAYGROUND } from './types'

//set an initial state for your variable
const initialState = {
  val: 1,
}

//declare your variable type
type State = {
  val: number
}

export const playground: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case PLAYGROUND.INCREMENT: {
      return { ...state, val: action.val }
    }
    default:
      return state
  }
}
