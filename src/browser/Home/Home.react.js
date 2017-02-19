import Helmet from 'react-helmet';
import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ name, initializeStore, isInitialized }) => (
  <div>
    <Helmet title="Home" />
    <p className="class-text">Hello, {name}!</p>
    <button onClick={() => initializeStore()}>Init</button>
    <p className="init">{isInitialized ? 'App is inited' : 'App is not inited'}</p>
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
