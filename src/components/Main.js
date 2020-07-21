import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';

class Main extends Component {
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
      </div>
    );
  }
}

export default Main;
