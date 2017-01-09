import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App.react';
import initializeStore from '../../redux/App.actions';

function mapStateToProps(state) {
  return {
    isInitialized: state.App.get('initialized')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    initializeStore
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
