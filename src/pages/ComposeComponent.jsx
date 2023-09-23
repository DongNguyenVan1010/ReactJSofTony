import React from 'react'

import CardHorizontal from '../components/CardHorizontal';


function ComposeComponent() {
  return (
    <div>
      <h2 style={ { color: "red" } }>Sample App: ComposeComponent</h2>
      <CardHorizontal mode="ghost" />

      <CardHorizontal 
        mode="danger"
      />

    </div>
  )
}

export default ComposeComponent