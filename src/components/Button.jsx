import React from "react";

export const Button = React.forwardRef((props, ref) => {
  const buttonRef = React.useRef(null);
  const [isOpenText, setIsOpenText] = React.useState(false);

  React.useImperativeHandle(ref, () =>{
    return {
      changeColor: () => {
        buttonRef.current.style.backgroundColor = 'red';
        buttonRef.current.style.borderBottom = "2px solid red"
      },
      changeText: () => {
        setIsOpenText(prevState => !prevState);
      }
    }
  },[])

  return (
    <>
      <button ref={buttonRef} {...props.extras} style={props.styles} className="button">
      {props.children}
      </button>
      <br />
      {isOpenText && <p>demo with useImperativeHandle</p>}

    </>
  );
})
