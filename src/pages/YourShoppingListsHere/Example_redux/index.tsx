import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { increaseQuantity } from '../../../store/Ved/actions'
import { RootState } from '../../../store/types'

const ShoppingListDiv = styled.div`
  margin: 1.5rem 1rem;
`

const SL_Example_Redux = () => {
  const dispatch = useDispatch()
  const { val } = useSelector((state: RootState) => state.exampleStore)

  const handleIncrement = () => {
    dispatch(increaseQuantity())
  }

  return (
    <ShoppingListDiv>
      <h1>Copy Your Shopping List Here, and implement with Redux!</h1>
      <h2>{val}</h2>
      <button onClick={increaseQuantity}>Increment</button> {}
    </ShoppingListDiv>
  )
}

export default SL_Example_Redux
