import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from 'antd/lib/button/button'
import Result from 'antd/lib/result'

const NotFound = () => {
  const history = useHistory()
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          Back Home
        </Button>
      }
    />
  )
}

export default NotFound
