import React, { PropTypes } from 'react';

const App = ({ name, initializeStore, isInitialized }) => (
  <div>
    Hello, {name}!
    <button onClick={() => initializeStore()}>Init</button>
    <p>{isInitialized ? 'App is inited' : 'App is not inited'}</p>
  </div>
);


App.propTypes = {
  name: PropTypes.string,
  initializeStore: PropTypes.func,
  isInitialized: PropTypes.bool
};

export default App;
