/** Types */
// create your own type!

/** Actions' types */
export enum ZIYANG_SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  // INCREMENT = 'ZIYANG_SHOPPING_LIST_ACTIONS.INCREMENT',
  ADD = 'ZIYANG_SHOPPING_LIST_ACTIONS.ADD',
}

/** Actions */
// export type Increment = {
//   type: typeof ZIYANG_SHOPPING_LIST_ACTIONS.INCREMENT
// }
export type Add = {
  type: typeof ZIYANG_SHOPPING_LIST_ACTIONS.ADD
}

export type ActionTypes = Add
