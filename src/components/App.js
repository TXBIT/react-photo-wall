import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../redux/actions';

import Main from './Main';

// function mapStateToProps(state) {
//   return {
//     posts: state,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ removePost }, dispatch);
// }

// const App = connect(mapStateToProps, mapDispatchToProps)(Main);

const App = connect(
  (state) => ({ posts: state }), // mapStateToProps
  (dispatch) => bindActionCreators({ removePost }, dispatch) // mapDispatchToProps
)(Main);

export default App;
