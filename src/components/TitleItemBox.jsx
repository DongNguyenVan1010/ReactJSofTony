import React, { useState } from 'react'

export default function TitleItemBox({ buttonTitle = 'No Item!', children }) {

    const titleItemStyle = {
        backgroundColor: "orange",
        color: "white",
        fontSize: "24px",
        padding: "10px",
        width: "100%"
    }

    const boxStyle = {
        display: "flex",
        // alignItems: "center",
        // justifyContent: "center",

    }

    const wrapStyle = {
        flexDirection: "column",
        borderStyle: "solid",
        borderColor: "orange"
    }
    const buttonItemStyle = {
        padding: "10px 12px",
        fontSize: "15px",
        backgroundColor: "white",
        color: "black",
        cursor: "pointer",
        width: "10%",
        margin: " 20px"
    }
    const [ increment, setIncrement ] = useState(0)
    const [ isHover, setIsHover ] = useState(false)

    const handleHover = () => {
        setIsHover(true)
    }
    const handleNotHover = () => {
        setIsHover(false)
    }


    const onIncrement = () => {
        setIncrement(increment + 1)
        console.log('increment', increment)
    }
    return (
        <>
            <div className='wrap' style={ wrapStyle }>

                <div style={ boxStyle }>{ increment == 0 ?
                    <span style={ titleItemStyle }>{ buttonTitle }</span>
                    :
                    <span style={ titleItemStyle }>{ increment } Items!</span>

                }
                </div>


                <button onMouseEnter={ handleHover } onMouseLeave={ handleNotHover } style={ buttonItemStyle } onClick={ onIncrement }>Increment</button>


            </div>
        </>

    )
}
