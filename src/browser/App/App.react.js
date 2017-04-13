import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import './App.scss';

const App = ({ name, initializeStore, isInitialized }) => (
  <div>
    <Helmet
      titleTemplate="%s - Kettle"
      defaultTitle="Rivers Agile Kettle Pot"
      meta={[
        {
          name: 'description',
          content: 'A seed project for creating beautiful things.'
        }
      ]}
    />
    <p className="class-text">Hello, {name}!</p>
    <button onClick={() => initializeStore()}>Init</button>
    <p className="init">{isInitialized ? 'App is inited' : 'App is not inited'}</p>
  </div>
);


App.propTypes = {
  initializeStore: PropTypes.func.isRequired,
  name: PropTypes.string,
  isInitialized: PropTypes.bool
};

App.defaultProps = {
  name: 'John',
  isInitialized: false
};

export default App;
