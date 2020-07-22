import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';

class Main extends Component {
  componentDidMount() {
    this.props.startLoadingPost();
  }
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Photo Wall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />

        <Route
          exact
          path="/add-photo"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path="/single/:id"
          render={(params) => <Single {...this.props} {...params} />}
        />
      </div>
    );
  }
}

export default Main;
