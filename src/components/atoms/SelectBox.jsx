import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const SelectBox = (props) => {
  const { name, id, value, onChange, width } = props;

  const Select = styled.select`
    width: ${width}%;
    height: 30px;
    background: white;
    color: gray;
    // padding-left: 5px;
    font-size: 14px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-radius: 2px;

    option {
      color: black;
      background: white;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
    }
  `;

  const [data] = useState(props.data);

  let options = data.map((data) => (
    <option key={data.name} value={data.name}>
      {data.name}
    </option>
  ));

  return (
    <Select
      name={name}
      placeholder="select"
      id={id}
      value={value}
      onChange={onChange}
    >
      <option>Select</option>
      {options}
    </Select>
  );
};
SelectBox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  data: PropTypes.array,
  onChange: PropTypes.func,
};
SelectBox.defaultProps = {
  name: "",
  id: "",
  value: "",
  data: [],
  onChange: () => {
    console.log("onChange func is missing !!!");
  },
};
export default SelectBox;
