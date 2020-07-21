import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render() {
    const { match, posts } = this.props;
    const id = Number(match.params.id);
    const post = posts.find((post) => post.id === id);
    console.log(post);
    return (
      <div className="single-photo">
        <Photo post={post} index={id} />
        <Comments />
      </div>
    );
  }
}

Single.propTypes = {
  match: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
};

export default Single;
