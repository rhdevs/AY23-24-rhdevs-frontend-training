import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { incrementVal, SET_STRING_VAL } from '../../../store/playground/actions'
import { RootState } from '../../../store/types'

// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`
  margin: 1.5rem 1rem;
`
const test = 'ASDASD'

const SL_Ziyang_Redux = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const { val, stringVal } = useSelector((state: RootState) => state.playground)
  return (
    <ShoppingListDiv>
      <h1>Copy Your Shopping List Here, and implement with Redux!</h1>
      <h2>{val}</h2>
      <h2>{stringVal}</h2>
      <button onClick={() => dispatch(SET_STRING_VAL(test))}>Increment</button>
    </ShoppingListDiv>
  )
}

export default SL_Ziyang_Redux
