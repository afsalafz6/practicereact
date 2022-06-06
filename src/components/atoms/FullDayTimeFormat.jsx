import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const Select = styled.select`
  width: 40%;
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

const FullDayTimeFormat = (props) => {
  const { minute = '' } = props;

  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }

  const HH = range(0, 24);
  let MM = [];
  switch (minute) {
    case '01':
      MM = range(0, 59);
      break;
    case '05':
      MM = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
      break;
    case '15':
      MM = ['00', '15', '30', '45'];
      break;
    case '30':
      MM = ['00', '30'];
      break;
    default:
      MM = ['00', '30'];
  }

  const [hour1, setHour1] = useState('00');
  const [minute1, setMinute1] = useState('00');
  const [time, setTime] = useState('00:00');

  const handleBlur = () => {
    setTime(() => hour1 + ':' + minute1);
    console.log(time);
    setTimeout(() => {
      console.log('TIME = ', time);
    }, 1000);
  };

  const handleChangeHour = (e) => {
    const { value } = e.target;
    setHour1(() => value);
  };
  const handleChangeMinute = (e) => {
    const { value } = e.target;
    setMinute1(() => value);
  };

  let minuteOption = MM.map((data) => (
    <option key={data} value={data}>
      {data}
    </option>
  ));
  let hourOption = HH.map((data) => (
    <option key={data} value={data}>
      {data}
    </option>
  ));

  return (
    <>
      <Select
        name="hour"
        placeholder="select"
        id="hr"
        onChange={handleChangeHour}
        onBlur={handleBlur}>
          <option>HH</option>
        {hourOption}
      </Select>
      &nbsp;
      <Select
        name="minute"
        placeholder="select"
        id="mm"
        onChange={handleChangeMinute}
        onBlur={handleBlur}>
        <option>MM</option>
        {minuteOption}
      </Select>
    </>
  );
};
FullDayTimeFormat.propTypes = {
  minute: PropTypes.string
};
FullDayTimeFormat.defaultProps = {
  minute: '30'
};
export default FullDayTimeFormat;
