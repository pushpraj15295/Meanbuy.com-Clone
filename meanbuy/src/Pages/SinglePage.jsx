import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePage = () => {
    const {id} = useParams()

  return (
    <div>SinglePage</div>
  )
}

export default SinglePage