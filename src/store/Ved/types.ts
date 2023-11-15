/** Types */
export type ShoppingItem = {
  name: string
  quantity: number
  key: number
}

/** Actions' types */

export enum VED_SHOPPING_LIST_ACTIONS {
  ADD = 'VED_SHOPPING_LIST_ACTIONS.ADD_ITEM',
  DELETE = 'VED_SHOPPING_LIST_ACTIONS.DELETE_ITEM',
  INCREMENT = 'VED_SHOPPING_LIST_ACTIONS.INCREASE_QUANTITY',
  DECREMENT = 'VED_SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY',
}

/** Actions */
export type AddAction = {
  type: typeof VED_SHOPPING_LIST_ACTIONS.ADD
  name: string
  key: number
}

export type DeleteAction = {
  type: typeof VED_SHOPPING_LIST_ACTIONS.DELETE
  key: number
}

export type IncreaseQuantityAction = {
  type: typeof VED_SHOPPING_LIST_ACTIONS.INCREMENT
  key: number
}

export type DecreaseQuantityAction = {
  type: typeof VED_SHOPPING_LIST_ACTIONS.DECREMENT
  key: number
}

export type ActionTypes = AddAction | DeleteAction | IncreaseQuantityAction | DecreaseQuantityAction
