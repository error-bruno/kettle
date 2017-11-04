import Helmet from 'react-helmet';
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button/Button.react';
import P from '../../components/P/P.react';

const Home = ({ name, initializeStore, isInitialized }) => (
  <div>
    <Helmet title="Home" />
    <P className="class-text">Hello, {name}!</P>
    <Button onClick={() => initializeStore()}>Init</Button>
    <P className="init">{isInitialized ? 'App is inited' : 'App is not inited'}</P>
  </div>
);

Home.propTypes = {
  initializeStore: PropTypes.func.isRequired,
  name: PropTypes.string,
  isInitialized: PropTypes.bool
};

Home.defaultProps = {
  name: 'John',
  isInitialized: false
};

export default Home;
