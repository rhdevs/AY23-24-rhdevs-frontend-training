import { Dispatch, GetState } from '../types'
import { ActionTypes, ZIYANG_SHOPPING_LIST_ACTIONS } from './types'

// export const incrementValue = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
//   const { val } = getState().ziyangStore
//   dispatch({
//     type: SHOPPING_LIST_ACTIONS.INCREMENT,
//     val: val + 1,
//   })
// }
export const Add = (s: string) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { data } = getState().ziyangStore
  const length = data.length + 1
  dispatch({
    type: ZIYANG_SHOPPING_LIST_ACTIONS.ADD,
    name: s,
    key: length,
  })
}
export const INCREMENT = (s: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { data } = getState().ziyangStore

  dispatch({
    type: ZIYANG_SHOPPING_LIST_ACTIONS.INCREMENT,
    key: s,
  })
}
export const DECREMENT = (s: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { data } = getState().ziyangStore

  dispatch({
    type: ZIYANG_SHOPPING_LIST_ACTIONS.DECREMENT,
    key: s,
  })
}
export const DELETE = (s: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { data } = getState().ziyangStore

  dispatch({
    type: ZIYANG_SHOPPING_LIST_ACTIONS.DECREMENT,
    key: s,
  })
}
