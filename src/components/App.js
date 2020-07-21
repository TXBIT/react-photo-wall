import { connect } from 'react-redux';

import Main from './Main';

// function mapStateToProps(state) {
//   return {
//     posts: state,
//   };
// }

// const App = connect(mapStateToProps)(Main);

const App = connect((state) => ({ posts: state }))(Main);

export default App;
