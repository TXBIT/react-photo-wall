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
  }
}

Single.propTypes = {
  match: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  comments: PropTypes.object.isRequired,
};

export default Single;
