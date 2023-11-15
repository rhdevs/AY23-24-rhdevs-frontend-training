import { Dispatch, GetState } from '../types'
import { ActionTypes, PLAYGROUND } from './types'

export const incrementVal = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { val } = getState().playground
  dispatch({
    type: PLAYGROUND.INCREMENT,
    val: val + 1,
  })
}

export const setStringVal = (newString: string) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: PLAYGROUND.SET_STRING_VAL,
    stringVal: newString,
  })
}
