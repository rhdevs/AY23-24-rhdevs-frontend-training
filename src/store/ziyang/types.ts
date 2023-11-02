/** Types */
// create your own type!

/** Actions' types */
export enum ZIYANG_SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  // INCREMENT = 'ZIYANG_SHOPPING_LIST_ACTIONS.INCREMENT',
  ADD = 'ZIYANG_SHOPPING_LIST_ACTIONS.ADD',
  INCREMENT = 'ZIYANG_SHOPPING_LIST_ACTIONS.INCREMENT',
  DECREMENT = 'ZIYANG_SHOPPING_LIST_ACTIONS.DECREMENT',
  DELETE = 'ZIYANG_SHOPPING_LIST_ACTIONS.DELETE',
}

/** Actions */
// export type Increment = {
//   type: typeof ZIYANG_SHOPPING_LIST_ACTIONS.INCREMENT
// }
export type Add = {
  type: typeof ZIYANG_SHOPPING_LIST_ACTIONS.ADD
  name: string
  key: number
}
export type INCREMENT = {
  type: typeof ZIYANG_SHOPPING_LIST_ACTIONS.INCREMENT
  key: number
}
export type DECREMENT = {
  type: typeof ZIYANG_SHOPPING_LIST_ACTIONS.DECREMENT
  key: number
}
export type DELETE = {
  type: typeof ZIYANG_SHOPPING_LIST_ACTIONS.DELETE
  key: number
}

export type ActionTypes = Add | INCREMENT | DECREMENT | DELETE
