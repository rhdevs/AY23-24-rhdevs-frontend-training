import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS } from './types'

export const incrementValue = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { val } = getState().exampleStore
  dispatch({
    type: SHOPPING_LIST_ACTIONS.INCREMENT,
    val: val + 1,
  })
}
