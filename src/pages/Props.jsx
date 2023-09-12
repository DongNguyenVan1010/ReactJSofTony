import React from 'react'
import Dialog from '../components/Dialog'

// default parameter
// destructuring object

function Button({ buttonText = 'Rest Operator', children, ...restProps}) {
  return (
    <button
      // type={type}
      // disabled={disabled}
      // className={className}
      // onClick={onClick}
      {...restProps}
    >
     {buttonText} <br />
     {children}
    </button>
  )
}


function Props({ firstName, lastName, age = 18, ...restProps }) {

  return (
    <div>
      <h2>Props</h2> <br />
      FirstName: {firstName} <br />
      Lastname: {lastName} <br />
      Age: {age} <br />

      <h4>Rest operator</h4>
      <Button 
        buttonText="Apply rest"
        type="button"
        onClick={() => console.log('Rest operator')}
        className="text-12"
        disabled={false}
      >
        Children
      </Button>

      <h4>Demo Dialog Children Form</h4>
      <Dialog
        onSubmit={() => console.log('onSubmit')}
        onCancel={() => console.log('onCancel')}
        component={<Button buttonText="function component" />} 
        component2={Button}
      >
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </Dialog>
     
    </div>
  )
}

export default Props