import { Reducer } from 'redux'
import { ActionTypes, PLAYGROUND } from './types'

//set an initial state for your variable
const initialState = {
  val: 1,
  stringVal: '',
}

//declare your variable type
type State = {
  val: number
  stringVal: string
}

export const playground: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case PLAYGROUND.INCREMENT: {
      return { ...state, val: action.val }
    }
    case PLAYGROUND.SET_STRING_VAL: {
      return { ...state, stringVal: action.stringVal }
    }
    default:
      return state
  }
}
