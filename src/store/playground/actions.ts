import { Dispatch, GetState } from '../types'
import { ActionTypes, PLAYGROUND } from './types'

export const incrementValue = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { val } = getState().playground
  dispatch({
    type: PLAYGROUND.INCREMENT,
    val: val + 1,
  })
}
