import React from 'react';
import PropTypes from 'prop-types';

const Photo = (props) => {
  const { post, index } = props;

  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button
          onClick={() => {
            props.removePost(index);
          }}
        >
          Remove
        </button>
      </div>
    </figure>
  );
};

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Photo;
