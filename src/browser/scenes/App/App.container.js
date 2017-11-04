import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import AppComp from './App.react';

import { serverContact } from '../../../redux/App.actions';

export class App extends React.Component {
  componentWillMount() {
    const { serverContactDispatch } = this.props;

    serverContactDispatch();
  }

  render() {
    return (<AppComp />);
  }
}

App.propTypes = {
  serverContactDispatch: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    serverContactDispatch: serverContact
  }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(App);
