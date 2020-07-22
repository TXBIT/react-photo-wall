import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render() {
    const { match, posts, comments } = this.props;
    const id = Number(match.params.id);
    const post = posts.find((post) => post.id === id);
    const index = posts.findIndex((post) => post.id === id);

    if (this.props.loading) {
      return <div className="loader">Loading...</div>;
    } else if (post) {
      return (
        <div className="single-photo">
          <Photo post={post} {...this.props} index={index} />
          <Comments
            startAddingComment={this.props.startAddingComment}
            comments={comments[id] || []}
            id={id}
          />
        </div>
      );
    } else {
      return <h1>No post found...</h1>;
    }
  }
}

Single.propTypes = {
  match: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  comments: PropTypes.object.isRequired,
};

export default Single;
