import { Dispatch, GetState } from '../types'
import { ActionTypes, ZIYANG_SHOPPING_LIST_ACTIONS } from './types'

export const incrementValue = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { val } = getState().ziyangStore
  dispatch({
    type: ZIYANG_SHOPPING_LIST_ACTIONS.INCREMENT,
    val: val + 1,
  })
}
