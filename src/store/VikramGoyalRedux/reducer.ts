import { Reducer } from 'redux'
import { ActionTypes, VIKRAMGOYAL_SHOPPING_LIST_ACTIONS } from './types'

//set an initial state for your variable
const initialState = {
  data: [],
}

interface SingleRow {
  key: number
  name: string
  quantity: number
}
//declare your variable type
type State = {
  data: SingleRow[]
}

export const vikramgoyalStore: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.ADD:
      const datas = [...state.data]
      datas.push({
        key: action.key,
        name: action.name,
        quantity: 1,
      })
      return {
        ...state,
        data: datas,
      }
    case VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.INCREMENT:
      return {
        ...state,
        data: [...state.data].map((x) => (x.key === action.key ? { ...x, quantity: x.quantity + 1 } : x)),
      }
    case VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.DECREMENT:
      return {
        ...state,
        data: [...state.data]
          .map((x) => (x.key === action.key ? { ...x, quantity: x.quantity - 1 } : x))
          .filter((x) => x.quantity !== 0),
      }
    case VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.DELETE:
      return {
        ...state,
        data: [...state.data].filter((x) => x.key !== action.key),
      }
    default:
      return state
  }
}
