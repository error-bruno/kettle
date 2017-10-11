import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Tea = ({ tea }) => (
  <div>
    <Helmet title="Tea" />

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
