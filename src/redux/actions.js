import { database } from '../database/config';

export const startAddingPost = (post) => (dispatch) =>
  database
    .ref('posts')
    .update({ [post.id]: post })
    .then(() => {
      dispatch(addPost(post));
    })
    .catch((error) => console.log(error));

export const startLoadingPost = () => (dispatch) =>
  database
    .ref('posts')
    .once('value')
    .then((snapshot) => {
      let posts = [];
      snapshot.forEach((childSnapshot) => posts.push(childSnapshot.val()));
      dispatch(loadPosts(posts));
    })
    .catch((error) => console.log(error));

export const startRemovingPost = (index, id) => (dispatch) =>
  database
    .ref(`posts/${id}`)
    .remove()
    .then(() => dispatch(removePost(index)))
    .catch((error) => console.log(error));

export const startAddingComment = (comment, postId) => (dispatch) =>
  database
    .ref(`comments/${postId}`)
    .push(comment)
    .then(() => dispatch(addComment(comment, postId)))
    .catch((error) => console.log(error));

export const startLoadingComment = () => (dispatch) =>
  database
    .ref('comments')
    .once('value')
    .then((snapshot) => {
      let comments = [];
      snapshot.forEach(
        (childSnapshot) =>
          (comments[childSnapshot.key] = Object.values(childSnapshot.val()))
      );
      dispatch(comments);
    })
    .catch();

export const loadComments = (comments) => {
  return {
    type: 'LOAD_COMMENTS',
    comments,
  };
};

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

export const loadPosts = (posts) => {
  return {
    type: 'LOAD_POSTS',
    posts,
  };
};
