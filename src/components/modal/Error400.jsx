import React from 'react'
import { useSelector } from 'react-redux'

function Error400() {
  const status = useSelector(state => state.app.status);

  if(!status) return null;
  
  return (
    <div>Error400</div>
  )
}

export default Error400