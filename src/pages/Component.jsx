import React, { useState } from 'react'


/* 3 parts
- state
- action
- view
*/

/* how many components re-render?
- state changes
- props changes
- parent component re-render
- forceUppdate (not recomend) - using by key component
*/

function Component() {
  // states
  const [isLoading, setIsLoading] = useState(false); // local variable

  // actions // memory B
  // function handleToggleLoading(id) {
  //   console.log('id: ', id)
  //   setIsLoading(prevState => !prevState); // toggle
  // }

  // curry function (function return the function)
  const handleToggleLoading = id => () => {
    console.log('id: ', id)
    setIsLoading(prevState => !prevState); // toggle
  }

  // views (JSX)
  return (
    <div>
      <h2>Component</h2>

      Show Loading: {isLoading ? 'Loading ...' : 'No Loading'}
      <br />
      {/* <button 
        type="button" 
        onClick={() => handleToggleLoading(Date.now())}
      >
        Show/Hide Loading
      </button> */}
       <button 
        type="button" 
        onClick={handleToggleLoading(Date.now())}
      >
        Show/Hide Loading
      </button>
    </div>
  )
}

export default Component