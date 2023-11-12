/** Types */
// create your own type!

/** Actions' types */
export enum VIKRAMGOYAL_SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  ADD = 'VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.ADD',
  INCREMENT = 'VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.INCREMENT',
  DECREMENT = 'VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.DECREMENT',
  DELETE = 'VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.DELETE',
}

/** Actions */
export type ADD = {
  type: typeof VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.ADD
  name: string
  key: number
}
export type INCREMENT = {
  type: typeof VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.INCREMENT
  key: number
}
export type DECREMENT = {
  type: typeof VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.DECREMENT
  key: number
}
export type DELETE = {
  type: typeof VIKRAMGOYAL_SHOPPING_LIST_ACTIONS.DELETE
  key: number
}

export type ActionTypes = ADD | INCREMENT | DECREMENT | DELETE
