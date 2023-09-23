import React from 'react'
import Typography from './Typography'

import SimpleButton from './SimpleButton'

export default function CardHorizontal({ mode }) {

  return (
    <>
      <div className='itemBox'>
        <div className='itemBox_content'>
          <div className='itemBox_title'>
            <Typography
              text="Title"
            />
          </div>

          <div className='itemBox_description'>
            <Typography
              text="Description"
            />
          </div>

          <div className='itemBox_action'>
            <SimpleButton
              mode={mode}
            />
          </div>
          
        </div>
      </div>
    </>
  )
}
