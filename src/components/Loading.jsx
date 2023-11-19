import React from 'react'
import { useSelector } from 'react-redux'

function Loading() {
  const isLoading = useSelector(state => state.app.isLoading);

  if(!isLoading) return null;
  
  return (
    <div className='loading'>Loading ...</div>
  )
}

export default Loading