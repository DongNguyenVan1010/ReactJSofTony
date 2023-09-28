import React, { useEffect } from "react";
import Typography from "./Typography";
import { useState } from "react";
export default function InputField({
  style,
  value,
  setValue,
  error = false,
  errorMsg = "",
  onChange,
  type = "text",
  name = "default",
  formState,
  setFormState,
  ...rest
}) {
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <span>
      <input
        {...rest}
        value={value}
        onChange={handleOnChange}
        style={style}
      ></input>
      <Typography variant="error" block hidden={!error}>
        {errorMsg}
      </Typography>
    </span>
  );
}
