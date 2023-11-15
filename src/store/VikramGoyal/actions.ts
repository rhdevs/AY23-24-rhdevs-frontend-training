import { Dispatch, GetState } from '../types'
import { ActionTypes, VIKRAMGOYAL_SHOPPING_LIST_ACTIONS } from './types'

export const ADD = (s: string) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { data } = getState().vikramgoyalStore
  const length = data.length + 1
  dispatch({
    type: VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.ADD,
    name: s,
    key: length,
  })
}
export const INCREMENT = (s: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { data } = getState().vikramgoyalStore

  dispatch({
    type: VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.INCREMENT,
    key: s,
  })
}
export const DECREMENT = (s: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { data } = getState().vikramgoyalStore

  dispatch({
    type: VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.DECREMENT,
    key: s,
  })
}
export const DELETE = (s: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { data } = getState().vikramgoyalStore

  dispatch({
    type: VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.DECREMENT,
    key: s,
  })
}