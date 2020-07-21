import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import { withRouter } from 'react-router';

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

const App = withRouter(
  connect(
    (state) => ({ posts: state.posts, comments: state.comments }), // mapStateToProps
    (dispatch) => bindActionCreators(actions, dispatch) // mapDispatchToProps
  )(Main)
);

export default App;
