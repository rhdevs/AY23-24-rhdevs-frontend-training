import React, { useState } from 'react'
import { Table, Input, InputNumber, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import styled from 'styled-components'

// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`
  width: 100%;
  padding: 64px 240px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const AddItemDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
`
const ActionsDiv = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  gap: 25px;
  align-items: center;
`
const inputStyle: React.CSSProperties = {
  borderRadius: '20px',
  border: '1px solid var(--neutral-5, #D9D9D9)',
  background: 'var(--neutral-1, #FFF)',
}

const buttonStyle: React.CSSProperties = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
}

interface Item {
  key: string
  quantity: number
  name: string
}

const AddIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M7.46863 1.37573H6.53113C6.44779 1.37573 6.40613 1.4174 6.40613 1.50073V6.40698H1.75024C1.66691 6.40698 1.62524 6.44865 1.62524 6.53198V7.46948C1.62524 7.55282 1.66691 7.59448 1.75024 7.59448H6.40613V12.5007C6.40613 12.5841 6.44779 12.6257 6.53113 12.6257H7.46863C7.55196 12.6257 7.59363 12.5841 7.59363 12.5007V7.59448H12.2502C12.3336 7.59448 12.3752 7.55282 12.3752 7.46948V6.53198C12.3752 6.44865 12.3336 6.40698 12.2502 6.40698H7.59363V1.50073C7.59363 1.4174 7.55196 1.37573 7.46863 1.37573Z"
      fill="#097AC0"
    />
  </svg>
)

const DecrementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M11 1.37503C5.68477 1.37503 1.375 5.6848 1.375 11C1.375 16.3153 5.68477 20.625 11 20.625C16.3152 20.625 20.625 16.3153 20.625 11C20.625 5.6848 16.3152 1.37503 11 1.37503ZM11 18.9922C6.58711 18.9922 3.00781 15.4129 3.00781 11C3.00781 6.58714 6.58711 3.00784 11 3.00784C15.4129 3.00784 18.9922 6.58714 18.9922 11C18.9922 15.4129 15.4129 18.9922 11 18.9922Z"
      fill="#097AC0"
    />
    <path
      d="M11 3.00784C6.58711 3.00784 3.00781 6.58714 3.00781 11C3.00781 15.4129 6.58711 18.9922 11 18.9922C15.4129 18.9922 18.9922 15.4129 18.9922 11C18.9922 6.58714 15.4129 3.00784 11 3.00784ZM15.125 11.5157C15.125 11.6102 15.0477 11.6875 14.9531 11.6875H7.04688C6.95234 11.6875 6.875 11.6102 6.875 11.5157V10.4844C6.875 10.3899 6.95234 10.3125 7.04688 10.3125H14.9531C15.0477 10.3125 15.125 10.3899 15.125 10.4844V11.5157Z"
      fill="#097AC0"
      fillOpacity="0.15"
    />
    <path
      d="M14.9531 10.3125H7.04688C6.95234 10.3125 6.875 10.3899 6.875 10.4844V11.5157C6.875 11.6102 6.95234 11.6875 7.04688 11.6875H14.9531C15.0477 11.6875 15.125 11.6102 15.125 11.5157V10.4844C15.125 10.3899 15.0477 10.3125 14.9531 10.3125Z"
      fill="#097AC0"
    />
  </svg>
)

const IncrementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M11 3.00784C6.58711 3.00784 3.00781 6.58714 3.00781 11C3.00781 15.4129 6.58711 18.9922 11 18.9922C15.4129 18.9922 18.9922 15.4129 18.9922 11C18.9922 6.58714 15.4129 3.00784 11 3.00784ZM15.125 11.5157C15.125 11.6102 15.0477 11.6875 14.9531 11.6875H11.6875V14.9532C11.6875 15.0477 11.6102 15.125 11.5156 15.125H10.4844C10.3898 15.125 10.3125 15.0477 10.3125 14.9532V11.6875H7.04688C6.95234 11.6875 6.875 11.6102 6.875 11.5157V10.4844C6.875 10.3899 6.95234 10.3125 7.04688 10.3125H10.3125V7.04691C10.3125 6.95237 10.3898 6.87503 10.4844 6.87503H11.5156C11.6102 6.87503 11.6875 6.95237 11.6875 7.04691V10.3125H14.9531C15.0477 10.3125 15.125 10.3899 15.125 10.4844V11.5157Z"
      fill="#097AC0"
      fillOpacity="0.15"
    />
    <path
      d="M11 1.37503C5.68477 1.37503 1.375 5.6848 1.375 11C1.375 16.3153 5.68477 20.625 11 20.625C16.3152 20.625 20.625 16.3153 20.625 11C20.625 5.6848 16.3152 1.37503 11 1.37503ZM11 18.9922C6.58711 18.9922 3.00781 15.4129 3.00781 11C3.00781 6.58714 6.58711 3.00784 11 3.00784C15.4129 3.00784 18.9922 6.58714 18.9922 11C18.9922 15.4129 15.4129 18.9922 11 18.9922Z"
      fill="#097AC0"
    />
    <path
      d="M14.9531 10.3125H11.6875V7.04691C11.6875 6.95237 11.6102 6.87503 11.5156 6.87503H10.4844C10.3898 6.87503 10.3125 6.95237 10.3125 7.04691V10.3125H7.04688C6.95234 10.3125 6.875 10.3899 6.875 10.4844V11.5157C6.875 11.6102 6.95234 11.6875 7.04688 11.6875H10.3125V14.9532C10.3125 15.0477 10.3898 15.125 10.4844 15.125H11.5156C11.6102 15.125 11.6875 15.0477 11.6875 14.9532V11.6875H14.9531C15.0477 11.6875 15.125 11.6102 15.125 11.5157V10.4844C15.125 10.3899 15.0477 10.3125 14.9531 10.3125Z"
      fill="#097AC0"
    />
  </svg>
)

const SL_Xinming = () => {
  const defaultItem: Item = {
    key: '0',
    quantity: 3,
    name: 'Eggs',
  }
  const [shoppingList, setShoppingList] = useState<Item[]>([defaultItem])
  const columns: ColumnsType<Item> = [
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '10%',
      render: (quantity: number) => <span>{quantity}</span>,
    },
    {
      title: 'Item Name',
      dataIndex: 'name',
      key: 'name',
      width: '60%',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, item: Item, index: number) => {
        const handleIncrement = () => {
          setShoppingList((prevValue: Item[]) => {
            const newList = [...prevValue]
            newList[index].quantity = prevValue[index].quantity + 1
            console.log(newList[index].quantity)
            return newList
          })
        }
        const handleDecrement = () => {
          setShoppingList((prevValue: Item[]) => {
            const newList = [...prevValue]
            newList[index].quantity = prevValue[index].quantity - 1
            console.log(newList[index].quantity)
            if (newList[index].quantity <= 0) {
              newList.splice(index, 1)
            }
            return newList
          })
        }
        const handleDelete = () => {
          setShoppingList((prevValue: Item[]) => {
            const newList = [...prevValue]
            newList.splice(index, 1)
            return newList
          })
        }
        return (
          <ActionsDiv>
            <Button icon={<DecrementIcon />} onMouseDown={handleDecrement} />
            <Button icon={<IncrementIcon />} onMouseDown={handleIncrement} />
            <Button type="text" onClick={handleDelete}>
              Delete
            </Button>
          </ActionsDiv>
        )
      },
    },
  ]

  const handleAddItem = () => {
    console.log('clicked')
    const quantity = (document.getElementById('add-quantity') as HTMLInputElement)?.value
    const name = (document.getElementById('add-name') as HTMLInputElement)?.value
    console.log(quantity, name)
    if (quantity && name) {
      setShoppingList((prevValue: Item[]) => {
        const newList = [...prevValue]
        newList.push({
          key: `${newList.length}`,
          quantity: parseInt(quantity),
          name,
        })
        return newList
      })
    }
  }

  return (
    <ShoppingListDiv>
      <h1>Shopping List</h1>
      <Table style={{ width: '100%' }} columns={columns} dataSource={[...shoppingList]} />
      <AddItemDiv style={{ marginTop: '20px' }}>
        <InputNumber style={{ ...inputStyle, width: 'calc(10% - 7px)' }} min={1} defaultValue={1} id="add-quantity" />
        <Input style={{ ...inputStyle, width: 'calc(60% - 14px)' }} placeholder="Item Name" id="add-name" />
        <Button style={buttonStyle} onClick={handleAddItem}>
          <AddIcon />
          Add
        </Button>
      </AddItemDiv>
    </ShoppingListDiv>
  )
}

export default SL_Xinming
