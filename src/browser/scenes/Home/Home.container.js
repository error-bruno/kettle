import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home.react';
import initializeStore from '../../../redux/App.actions';

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
)(Home);
