import { Reducer } from 'redux'
import { ActionTypes, VED_SHOPPING_LIST_ACTIONS, ShoppingItem } from './types'

const initialState: ShoppingItem[] = []

export const vedStore: Reducer<ShoppingItem[], ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case VED_SHOPPING_LIST_ACTIONS.ADD:
      return [...state, { key: action.key, name: action.name, quantity: 1 }]
    case VED_SHOPPING_LIST_ACTIONS.DELETE:
      return state.filter((item) => item.key !== action.key)
    case VED_SHOPPING_LIST_ACTIONS.INCREMENT:
      return state.map((item) => (item.key === action.key ? { ...item, quantity: item.quantity + 1 } : item))
    case VED_SHOPPING_LIST_ACTIONS.DECREMENT:
      return state
        .map((item) => (item.key === action.key ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity !== 0)
    default:
      return state
  }
}
