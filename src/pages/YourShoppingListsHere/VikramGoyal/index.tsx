import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Form, Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Button, Input, Select } from 'antd'

// Do not edit the other parts of the code!

const ShoppingListDiv = styled.div`
  margin: 1.5rem 1rem;
`

interface SingleRow {
  key: number
  name: string
  quantity: number
}

const SL_VikramGoyal: React.FC = () => {
  const increment = (id: number) => {
    //@ts-expect-error idk tbh
    setData((x: SingleRow[] | void) => {
      if (x !== undefined) {
        return x.map((y) => (y.key !== id ? y : { ...y, quantity: y.quantity + 1 }))
      }
    })
  }
  const del = (id: number) => {
    //@ts-expect-error idk tbh
    setData((x: SingleRow[] | void) => {
      if (x !== undefined) {
        return x.filter((y) => y.key != id)
      }
    })
  }
  const decrement = (id: number) => {
    //@ts-expect-error idk tbh
    setData((x: SingleRow[] | void) => {
      if (x !== undefined) {
        return x.map((y) => (y.key !== id ? y : { ...y, quantity: y.quantity - 1 })).filter((x) => x.quantity !== 0)
      }
    })
  }
  const columns: ColumnsType<SingleRow> = [
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
          <button onClick={() => increment(record.key)}>+</button>
          {/* <button onClick={() => console.log("asdasd")}>+</button> */}
          <button onClick={() => decrement(record.key)}>-</button>
          <button onClick={() => del(record.key)}>delete</button>
        </Space>
      ),
    },
  ]

  const [data, setData] = useState<SingleRow[]>([])

  //@ts-expect-error idk tbh
  const submit = ({ name }) => {
    console.log(name)

    const num = data.length + 1

    data.push({
      key: num,
      name,
      quantity: 1,
    })

    console.log(data)

    setData([...data])
  }

  return (
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
  )
}

export default SL_VikramGoyal
