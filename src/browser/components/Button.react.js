import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, clickAction, disabled }) => (
  <button disabled={disabled} onClick={() => clickAction()}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false
};

export default Button;

