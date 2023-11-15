/** Types */
// create your own type!

/** Actions' types */
export enum PLAYGROUND {
  //follow naming convention <enum name>.<enum item name>
  INCREMENT = 'PLAYGROUND.INCREMENT',
  SET_STRING_VAL = `PLAYGROUND.SET_STRING_VAL`,
}

/** Actions */
export type Increment = {
  type: typeof PLAYGROUND.INCREMENT
  val: number
}

export type SetStringVal = {
  type: typeof PLAYGROUND.SET_STRING_VAL
  stringVal: string
}
export type ActionTypes = Increment | SetStringVal
