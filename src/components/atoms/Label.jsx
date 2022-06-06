import React from 'react';
import { PropTypes } from 'prop-types';

const Label = (props) => {
  const { id, label } = props;
  return (
    <div>
      <label htmlFor={id}>{label} </label>
    </div>
  );
};
Label.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
};
Label.defaultProps = {
  id: '',
  label: ''
};
export default Label;
