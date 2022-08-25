import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePage = () => {
    const {id} = useParams()

    console.log("dekh le id albert",id)
  return (
    <div>SinglePage</div>
  )
}

export default SinglePage