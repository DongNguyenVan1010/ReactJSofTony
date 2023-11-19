import React from 'react'
import { useSelector } from 'react-redux'

function ModalError() {
  const error = useSelector(state => state.app.modalError);

  if(!error.isShow) return null;
  
  return (
    <div>
      Title: {error.title} <br />
      Content: {error.content}
    </div>
  )
}

export default Error500