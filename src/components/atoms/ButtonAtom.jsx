import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

// const Button1 = styled.button`
//   background: #25a5be;
//   color: white;
//   padding: 0.50em 1.5em;
//   position:relative;
//   margin-top:50px;
// `;
// position:${props => props.position};
// margin-top::${props => props.top};
// position:relative;
// margin-top:50px;
const ButtonAtom = (props) => {

  const { text = "",background,color,onClickFn } = props;

  const Button = styled.button`
    background: ${background};
    color:  ${color};
    padding: 0.5em 1.5em;
    position: relative;
    border: 1px solid #C2C5C8;
    border-radius: 2px;
    margin-top: 20px;
    margin-left: 3px;
    margin-right: 3px;
    opacity:1;
  `;

  return (
    <div>
      <Button onClick={onClickFn}>{text}</Button>
    </div>
  ); 
};
ButtonAtom.propTypes = {
  text: PropTypes.string,
  onClickFn: PropTypes.func
};
ButtonAtom.defaultProps = {
  text: "button",
  background:"#4EA0A2",
  color:"white",
  border: "none",
  onClickFn:() => {console.log("onClick func is missing !!!");}

};
export default ButtonAtom;
