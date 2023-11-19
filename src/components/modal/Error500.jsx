import React from 'react'
import { useSelector } from 'react-redux'

function Error500() {
  const status = useSelector(state => state.app.status);

  if(!status) return null;
  
  return (
    <div>Error500</div>
  )
}

export default Error500