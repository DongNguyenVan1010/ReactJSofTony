import React from 'react'
import PropTypes from 'prop-types';

// naming operator
function Dialog({ children, onSubmit, onCancel, btnCancel = 'Cancel', btnSubmit = 'Submit', component, component2: ButtonComponent}) {

  return (
    <div>

      {children} 

      <br />

      <h6>Props with function component</h6>
      {component}
      <br />
      <ButtonComponent buttonText="Naming operator" />

      <button type='button' onClick={onCancel}>{btnCancel}</button>
      {onSubmit && (
        <button type='button' onClick={onSubmit}>{btnSubmit}</button>
      )}
    </div>
  )
}

export default Dialog

Dialog.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  btnCancel: PropTypes.string,
  btnSubmit: PropTypes.string,
  component: PropTypes.element,
  component2: PropTypes.elementType
}