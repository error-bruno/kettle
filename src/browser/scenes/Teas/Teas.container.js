import { connect } from 'react-redux';
import Teas from './Teas.react';

function mapStateToProps(state) {
  return {
    teas: state.Teas.get('teas')
  };
}

export default connect((
  mapStateToProps
))(Teas);
