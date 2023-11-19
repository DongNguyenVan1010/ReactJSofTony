import React, { useState } from "react";
import Form from "../components-khuong/Form";
import FormControl from "../components-khuong/FormControl";
import InputField from "../components-khuong/InputField";
import InputLabel from "../components-khuong/InputLabel";
import Button from "../components-khuong/Button";
import BoxList from "../components-khuong/BoxList";
function GenerateBoxKhuong() {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setBoxesNum(parseInt(value));
  };
  const [boxesNum, setBoxesNum] = useState(0);
  const [value, setValue] = useState(0);
  function validateInput(value) {
    if (
      parseInt(value) >= 0 &&
      parseInt(value) < 129 &&
      Number.isInteger(Number(value))
    ) {
      return true;
    }
    return false;
  }
  const error = !validateInput(value);
  /*const [formState, setFormState] = useState({
    boxesnum: {
      error: false,
      msg: "Vui lòng nhập số nguyên từ 1 đến 128",
      isError: (value) => {
        if (value > 1 && value < 128) {
          return false;
        }
        return true;
      },
    },
  });
  console.log("reset");*/
  return (
    <div>
      <h3>Sample App: GenerateBoxKhuong</h3>
      <Form row borderBottom onSubmit={handleOnSubmit}>
        <FormControl inlined>
          <InputLabel inlined text="Number of boxes :" htmlFor="boxesnum" />
          <InputField
            inlined
            id="boxesnum"
            name="boxesnum"
            value={value}
            setValue={setValue}
            error={error}
            errorMsg="Nhập giá trị từ 1 đến 128"
            required
          ></InputField>
        </FormControl>
        <FormControl inlined>
          <Button type="submit" small disabled={error}>
            Generate
          </Button>
        </FormControl>
      </Form>
      <BoxList boxesNum={boxesNum} />
    </div>
  );
}

export default GenerateBoxKhuong;
