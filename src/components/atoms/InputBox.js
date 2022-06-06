import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

// const Input = styled.input`
//   width: 80%;
//   height: 30px;
//   background: white;
//   color: gray;
//   padding-left: 5px;
//   font-size: 14px;
//   margin-bottom: 10px;
// `;

const InputBox = (props) => {

  const {
    type = "text",
    id = "",
    name = "",
    size = "",
    placeholder = "",
    onChange,
    value,
    width
  } = props;

  const Input = styled.input`
  width: ${width}%;
  // width: 80%;
  height: 30px;
  background: white;
  color: gray;
  // padding-left: 5px;
  // padding-right: 5px;
  font-size: 14px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #939598;
  `;

  const handleBlur = (e) => {
    // console.log('onBlur', e.target.value);
    if (!e.target.value) {
      console.log(`${e.target.name} Input field can't be Empty !!!`);
    }
  };

  return (
    <div>
      <Input
        type={type}
        id={id}
        value={value}
        name={name}
        size={size}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleBlur}
      />
    </div>
  );
};
InputBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
InputBox.defaultProps = {
  type: "",
  name: "",
  id: "",
  placeholder: "",
  value: "",
  onChange: () => {
    console.log("onChange func is missing !!!");
  },
};
export default InputBox;
