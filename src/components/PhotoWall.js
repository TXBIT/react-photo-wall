import React from 'react';
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

export default PhotoWall;
