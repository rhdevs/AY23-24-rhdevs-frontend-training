import { Reducer } from 'redux'
import { ActionTypes, ZIYANG_SHOPPING_LIST_ACTIONS } from './types'

//set an initial state for your variable
const initialState = {
  data: [
    {
      key: 1,
      name: 'Eggs',
      quantity: 1,
    },
    {
      key: 2,
      name: 'Milk',
      quantity: 1,
    },
    {
      key: 3,
      name: 'Meat',
      quantity: 1,
    },
  ],
}

interface DataType {
  key: number
  name: string
  quantity: number
}
//declare your variable type
type State = {
  data: DataType[]
}

export const ziyangStore: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ZIYANG_SHOPPING_LIST_ACTIONS.ADD: {
      return {
        ...state,
        data: [
          {
            key: 123,
            name: 'ASDASD',
            quantity: 102,
          },
        ],
      }
    }
    default:
      return state
  }
}
