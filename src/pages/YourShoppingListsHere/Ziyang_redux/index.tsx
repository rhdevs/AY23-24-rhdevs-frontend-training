import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Add, INCREMENT, DECREMENT, DELETE } from '../../../store/ziyang/actions'
import { RootState } from '../../../store/types'
import { useState, useEffect } from 'react'
import { Form, Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Button, Input, Select } from 'antd'
// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`
  margin: 1.5rem 1rem;
`

interface DataType {
  key: number
  name: string
  quantity: number
}

const SL_Ziyang_Redux = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const { data } = useSelector((state: RootState) => state.ziyangStore)

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => dispatch(INCREMENT(record.key))}>+</button>
          <button onClick={() => dispatch(DECREMENT(record.key))}>-</button>
          <button onClick={() => dispatch(DELETE(record.key))}>delete</button>
          {/* <button onClick={() => decrement(record.key)}>-</button>
          {/* <button onClick={() => del(record.key)}>delete</button> */}
        </Space>
      ),
    },
  ]

  const submit = (values: any) => dispatch(Add(values.name))

  return (
    <ShoppingListDiv>
      {/* <h1>Copy Your Shopping List Here, and implement with Redux!</h1>
      <h2>{val}</h2>
      <button onClick={() => dispatch(incrementValue())}>Increment</button> */}
      <>
        <Table columns={columns} dataSource={data} pagination={false} />
        <Form onFinish={submit}>
          <Space.Compact style={{ width: '90%' }}>
            <Form.Item<'text'> name="name">
              <Input />
            </Form.Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Space.Compact>
        </Form>
      </>
    </ShoppingListDiv>
  )
}

export default SL_Ziyang_Redux
