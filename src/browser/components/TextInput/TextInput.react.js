import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => (
  <label className="label" htmlFor={props.name}>{props.label}:
    <input
      className="input"
      id={props.name}
      type="text"
      {...props}
    />
  </label>
);

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
};

TextInput.defaultProps = {
  label: '',
  name: ''
};

export default TextInput;
