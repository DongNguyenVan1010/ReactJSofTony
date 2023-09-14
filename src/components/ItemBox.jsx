import React from 'react'
import TitleItemBox from './TitleItemBox'

export default function ItemBox() {



    const flexStyle = {
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        margin: "0 60px 20px 60px",
    }

    return (
        <>
            <div className='box' style={ flexStyle }>
                <TitleItemBox>

                </TitleItemBox>
            </div>

        </>
    )
}
