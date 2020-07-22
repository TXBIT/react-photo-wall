import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Photo = (props) => {
  const { post, index } = props;

  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        <img className="photo" src={post.imageLink} alt={post.description} />
      </Link>
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button
          onClick={() => {
            props.removePost(index);
            props.history.push('/');
          }}
        >
          Remove
        </button>
        <Link className="button" to={`/single/${post.id}`}>
          <div className="comment-count">
            <div className="speech-bubble"></div>
            {props.comments[post.id] ? props.comments[post.id].length : 0}
          </div>
        </Link>
      </div>
    </figure>
  );
};

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Photo;
