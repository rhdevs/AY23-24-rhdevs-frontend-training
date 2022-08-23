import React from 'react'
import { useParams } from 'react-router-dom'

import GroupX from './GroupX'
import NotFound from '../ErrorPage/NotFound'

const Groups = () => {
  const params = useParams<{ groupNumber: string }>()

  switch (Number(params.groupNumber)) {
    case 1:
      return <GroupX />
    //   Insert case statement to return your group's page
    default:
      return <NotFound />
  }
}

export default Groups
