import React from 'react'

import {useResizeWindow} from '../hooks/useResizeWindow'

function PerformanceHook({name, age, handleDeleteAuthor }) {
  const { isSmallScreen } = useResizeWindow();

  console.log('render PerformanceHook', {
    name, 
    age
  })

  return (
    <div>
      <h2>PerformanceHook</h2>
      <br />
      Width: {isSmallScreen ? 'small' : 'large'}

      <br />
      <button type="button" onClick={handleDeleteAuthor}>Show forceUpdate</button>
    </div>
  )
}

export default React.memo(PerformanceHook)

// export default React.memo(PerformanceHook, customEqual)

// function customEqual(prevProps, nextProps) {
//   console.log('custom equal: ', {
//     prevProps,
//     nextProps
//   })
//   if (prevProps.name === nextProps.name) {
//     return true
//   }
//   return false
// }