/** Types */
// create your own type!

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  INCREMENT = 'SHOPPING_LIST_ACTIONS.INCREMENT',
}

/** Actions */
export type Increment = {
  type: typeof SHOPPING_LIST_ACTIONS.INCREMENT
  val: number
}

export type ActionTypes = Increment
