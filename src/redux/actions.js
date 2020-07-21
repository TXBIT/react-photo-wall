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

export const addComment = (comment) => {
  return {
    type: 'ADD_COMMENT',
    comment,
  };
};
