/** Types */
// create your own type!

/** Actions' types */
export enum PLAYGROUND {
  //follow naming convention <enum name>.<enum item name>
  INCREMENT = 'PLAYGROUND.INCREMENT',
}

/** Actions */
export type Increment = {
  type: typeof PLAYGROUND.INCREMENT
  val: number
}

export type ActionTypes = Increment
