import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Photo from './Photo';

const PhotoWall = (props) => {
  const { posts, onRemovePhoto } = props;
  return (
    <div>
      <Link className="add-icon" to="/add-photo"></Link>
      <div className="photo-grid">
        {posts.map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={onRemovePhoto} />
        ))}
      </div>
    </div>
  );
};

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
