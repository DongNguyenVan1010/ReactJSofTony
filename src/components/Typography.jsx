import React from 'react'
import clsx from 'clsx';
import styles from './typography.module.css';

import './typography.css'

function Typography({ text }) {
  return (
    <span className={clsx(
      styles.typography_heading,
      "bg-red"
    )}>{text}</span>
  )
}

export default Typography