import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { incrementVal } from '../../store/playground/actions'
import { RootState } from '../../store/types'

// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`
  margin: 1.5rem 1rem;
`

const Redux_Playground = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const { val } = useSelector((state: RootState) => state.playground)

  return (
    <ShoppingListDiv>
      <h1>Redux Playground</h1>
      <h2>val: {val}</h2>
      <button onClick={() => dispatch(incrementVal())}>Increment val</button>
    </ShoppingListDiv>
  )
}

export default Redux_Playground
