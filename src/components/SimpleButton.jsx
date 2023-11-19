import React from 'react'
import clsx from 'clsx';

import style from './button.module.css'

// mode: danger, success, warning, ghost
function SimpleButton({ buttonText = 'Button', mode="primary", ...rest }) {
  return (
    <button
      {...rest}
      className={clsx(
        "button",
        style['bg-red'],
        mode === "danger" && "button_danger",
        mode === "ghost" && "button_ghost",
        mode === "success" && "button_success",
        mode === "warning" && "button_warning",
      )}
    >
      {buttonText}
    </button>
  )
}

export default SimpleButton