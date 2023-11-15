import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input, Table } from 'antd'
import { DeleteOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'

const ShoppingListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 1rem;
  text-align: center;
`

const Header = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 57.6px;
  text-align: center;
`

const InputFields = styled.div`
  display: flex;
  justify-content: stretch;
  width: 1201px;
  margin-top: 1rem;
`

const InputField = styled(Input)`
  margin-right: 0rem;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
`

const AddButton = styled(Button)`
  width: 111px;
  height: 32px;
  padding: '5px 16px';
  border-radius: 2px;
  border: 1px solid #d9d9d9;
  background: linear-gradient(0deg, #d9d9d9, #d9d9d9);
  border: 1px solid #d9d9d9;
  background: #097ac0;
  box-shadow: 0px 2px 0px 0px #00000004;
`

const SL_Ved: React.FC = () => {
  const [item, setItem] = useState<string>('')
  const [quantity, setQuantity] = useState<number | null>(null)
  const [shoppingList, setShoppingList] = useState<{ name: string; quantity: number; key: number }[]>([])

  const increment = (key: number) => {
    const updatedList = shoppingList.map((item) => (item.key !== key ? item : { ...item, quantity: item.quantity + 1 }))
    setShoppingList(updatedList)
  }

  const decrement = (key: number) => {
    const updatedList = shoppingList
      .map((item) => (item.key !== key ? item : { ...item, quantity: item.quantity - 1 }))
      .filter((item) => item.quantity !== 0)
    setShoppingList(updatedList)
  }

  const deleteItem = (key: number) => {
    const updatedList = shoppingList.filter((item) => item.key !== key)
    setShoppingList(updatedList)
  }

  const columns = [
    {
      title: (
        <div
          style={{
            width: 71,
            height: 22,
            fontSize: 18,
            fontWeight: 500,
            lineHeight: '22px',
            textAlign: 'left',
          }}
        >
          Quantity
        </div>
      ),
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'left' as const,
      width: 122,
      render: (text: any, record: any, index: number) => (
        <div
          style={{
            width: 90,
            height: 22,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '22px',
            textAlign: 'left',
          }}
        >
          {shoppingList[index].quantity}
        </div>
      ),
    },
    {
      title: (
        <div
          style={{
            width: 90,
            height: 22,
            fontSize: 18,
            fontWeight: 500,
            lineHeight: '22px',
            textAlign: 'left',
          }}
        >
          Item Name
        </div>
      ),
      dataIndex: 'name',
      key: 'name',
      align: 'left' as const,
      width: 754,
      render: (text: any, record: any, index: number) => (
        <div
          style={{
            width: 722,
            height: 22,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '22px',
            textAlign: 'left',
          }}
        >
          {shoppingList[index].name}
        </div>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      align: 'left' as const,
      width: 325,
      render: (_, record: any) => (
        <span>
          <Button type="default" icon={<PlusCircleOutlined />} onClick={() => increment(record.key)} />
          <Button type="default" icon={<MinusCircleOutlined />} onClick={() => decrement(record.key)} />
          <Button type="default" icon={<DeleteOutlined />} onClick={() => deleteItem(record.key)}>
            Delete
          </Button>
        </span>
      ),
    },
  ]

  const addItem = () => {
    if (item.trim() !== '' && quantity !== null) {
      const existingItemIndex = shoppingList.findIndex((listItem) => listItem.name === item)
      if (existingItemIndex !== -1) {
        const updatedList = [...shoppingList]
        updatedList[existingItemIndex].quantity += quantity
        setShoppingList(updatedList)
      } else {
        setShoppingList([...shoppingList, { name: item, quantity: quantity, key: shoppingList.length }])
      }
      setItem('')
      setQuantity(null)
    }
  }

  return (
    <ShoppingListDiv>
      <Header>Shopping List</Header>
      <Table dataSource={shoppingList} columns={columns} pagination={false} style={{ height: 224, width: 1201 }} />
      <InputFields>
        <InputField
          placeholder="Item Name"
          value={quantity || ''}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{
            width: 115,
            marginRight: 20,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '22px',
            textAlign: 'left',
          }}
        />
        <InputField
          placeholder="Enter item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
          style={{
            width: 725,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '22px',
            textAlign: 'left',
            paddingLeft: 16,
            marginRight: 25,
          }}
        />
        <AddButton type="primary" onClick={addItem}>
          Add Item
        </AddButton>
      </InputFields>
    </ShoppingListDiv>
  )
}

export default SL_Ved
