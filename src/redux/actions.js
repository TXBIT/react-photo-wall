import { database } from '../database/config';

export const startAddingPost = (post) => (dispatch) =>
  database
    .ref('posts')
    .update({ [post.id]: post })
    .then(() => {
      dispatch(addPost(post));
    })
    .catch((error) => console.log(error));

export const removePost = (index) => {
  return {
    type: 'REMOVE_POST',
    index,
  };
};

export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    post,
  };
};

export const addComment = (comment, postId) => {
  return {
    type: 'ADD_COMMENT',
    comment,
    postId,
  };
};
