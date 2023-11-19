import React from 'react'
import { useSelector } from 'react-redux'

function Error404() {
  const status = useSelector(state => state.app.status);

  if(!status) return null;

  return (
    <div>Error404</div>
  )
}

export default Error404