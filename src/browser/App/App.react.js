import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Navigation from '../Navigation/Navigation.container';
import Home from '../Home/Home.container';
import Teas from '../Teas/Teas.container';

import './App.scss';

const App = () => (
  <Router>
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

      <Navigation />

      <Route exact path="/" render={() => <Home name="World" />} />
      <Route path="/teas" component={Teas} />
    </div>
  </Router>
);

export default App;
