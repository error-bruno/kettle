import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Tea from './Tea/Tea.container';

const Teas = ({ teas }) => (
  <div>
    <Helmet title="Teas" />

    <h1>Teas</h1>

    {teas.map((tea =>
      <Tea key={tea.type} tea={tea} />
    ))}
  </div>
);

Teas.propTypes = {
  teas: PropTypes.arrayOf(PropTypes.object)
};

Teas.defaultProps = {
  teas: []
};

export default Teas;
