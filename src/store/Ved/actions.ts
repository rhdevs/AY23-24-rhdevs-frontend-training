import { Dispatch } from '../types'
import { ActionTypes, VED_SHOPPING_LIST_ACTIONS, ShoppingItem } from './types'

export const addItem = (item: ShoppingItem) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: VED_SHOPPING_LIST_ACTIONS.ADD,
    name: item.name,
    key: item.key,
  })
}

export const deleteItem = (key: number) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: VED_SHOPPING_LIST_ACTIONS.DELETE,
    key,
  })
}

export const increaseQuantity = (key: number) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: VED_SHOPPING_LIST_ACTIONS.INCREMENT,
    key,
  })
}

export const decreaseQuantity = (key: number) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: VED_SHOPPING_LIST_ACTIONS.DECREMENT,
    key,
  })
}
