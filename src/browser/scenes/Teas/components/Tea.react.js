import React from 'react';
import PropTypes from 'prop-types';

const Tea = ({ tea }) => (
  <div>
    <h2>{tea.type}</h2>
    <p>{tea.description}</p>
  </div>
);

Tea.propTypes = {
  tea: PropTypes.shape({
    type: PropTypes.string,
    description: PropTypes.string,
  })
};

Tea.defaultProps = {
  tea: {}
};

export default Tea;
