import React from "react";
import Label from "../atoms/Label";
import InputBox from "../atoms/InputBox";
import { PropTypes } from "prop-types";

const InputField = (props) => {
  const {
    name = "",
    type = "",
    id = "",
    label = "",
    size = "",
    placeholder = "",
    onChange,
    value,
    width
  } = props;
  return (
    <div>
      <Label label={label} id={id} />
      <InputBox
        name={name}
        type={type}
        id={id}
        value={value}
        size={size}
        placeholder={placeholder}
        onChange={onChange}
        width={width}
      />
      {/* {inputFieldData.length > 0 &&
        inputFieldData.map((input) => {
          const { name, type, id, size, placeholder, onChange, value} = input;
          return <InputBox
          name={name}
          type={type}
          id={id}
          value={value}
          size={size}
          placeholder={placeholder}
          onChange={onChange}
        />;
        })} */}
    </div>
  );
};
InputField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
InputField.defaultProps = {
  name: "",
  type: "",
  id: "",
  label: "",
  placeholder: "",
  value: "",
  onChange: () => {
    console.log("onChange func is missing !!!");
  },
};
export default InputField;
