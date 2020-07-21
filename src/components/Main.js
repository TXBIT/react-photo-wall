import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { removePost } from '../redux/actions';

class Main extends Component {
  componentDidMount() {
    this.props.removePost(1);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={'Photo Wall'} />
              <PhotoWall {...this.props} />
            </div>
          )}
        />

        {/* <Route
          exact
          path="/add-photo"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={(addedPost) => {
                this.addPhoto(addedPost);
                history.push('/');
              }}
            />
          )}
        /> */}
      </div>
    );
  }
}

export default Main;
