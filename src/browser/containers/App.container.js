import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App.component';
import initializeStore from '../../redux/App.actions';

function mapStateToProps(state) {
  return {
    isInitialized: state.get('initialized')
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
