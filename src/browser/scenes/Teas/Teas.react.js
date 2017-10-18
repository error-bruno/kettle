import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Tea from './components/Tea.react';
import Form from './form/form.container';

const Teas = ({ teas }) => (
  <div>
    <Helmet title="Teas" />

    <h1>Teas</h1>

    <Form />
    {teas.map((tea =>
      <Tea key={tea.id} tea={tea} />
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
