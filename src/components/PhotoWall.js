import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

const PhotoWall = (props) => {
  const { posts, onRemovePhoto } = props;
  return (
    <div className="photo-grid">
      {posts.map((post, index) => (
        <Photo key={index} post={post} onRemovePhoto={onRemovePhoto} />
      ))}
    </div>
  );
};

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
