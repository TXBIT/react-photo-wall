import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Photo from './Photo';

const PhotoWall = (props) => {
  const { posts } = props;
  return (
    <div>
      <Link className="add-icon" to="/add-photo"></Link>
      <div className="photo-grid">
        {posts
          .sort((x, y) => y.id - x.id)
          .map((post, index) => (
            <Photo key={index} post={post} {...props} />
          ))}
      </div>
    </div>
  );
};

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PhotoWall;
