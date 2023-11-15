import React, { useState, Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { incrementVal, setStringVal } from '../../store/playground/actions'
import { RootState } from '../../store/types'

// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`
  margin: 1.5rem 1rem;
`
const Redux_Playground = () => {
  const dispatch: Dispatch<any> = useDispatch()
 
  return (
    <ShoppingListDiv>
      <h1>Redux Playground</h1>
      <h2>val: {val}</h2>
      <h2>stringVal: {stringVal}</h2>
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button onClick={() => dispatch(setStringVal(inputVal))}>Set String</button>
      <button onClick={() => dispatch(incrementVal())}>Increment val</button>
    </ShoppingListDiv>
  )
}

export default Redux_Playground
