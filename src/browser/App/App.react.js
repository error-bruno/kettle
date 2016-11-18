import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

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
