import React, { useState } from 'react'

function State() {
  const [isLoading, setIsLoading] = useState(false); // local variable
  const [timeStamp, setTimeStamp] = useState(Date.now());
  const [message, setMessage] = React.useState({
    text: '',
    id: 1,
    firstName: 'tony'
  }); // memory A

  function handleToggleLoading() {
    setIsLoading(prevState => !prevState); // toggle
    setTimeStamp(Date.now())
  }

  function updateMessageObject() {
    // message.text = `Text ${Date.now()}`; // // memory A
    // const newMessasge = {
    //   ...message, // copy all properties
    //   text: `Text ${Date.now()}`, 
    // }; // memory ?
    // setMessage(newMessasge)
    
    // updater function
    setMessage(prevState => {
      // const newMessasge = {
      //   ...prevState, // copy all properties
      //   text: `Text ${Date.now()}`, 
      // };
      // return newMessasge
      return {
        ...prevState,
        text: `Text ${Date.now()}`,
      }
    })
  }

  return (
    <div>
      <h2>State</h2>

      Show Loading: {isLoading ? 'Loading ...' : 'No Loading'}
      <br />
      TimeStamp: {timeStamp}

      <br />
      Message Object: {message.text}

      <br />
      <button type="button" onClick={handleToggleLoading}>Show/Hide Loading</button>
      <button type="button" onClick={updateMessageObject}>Update Object</button>
    </div>
  )
}

export default State