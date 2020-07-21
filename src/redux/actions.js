export const removePost = (post) => {
  return {
    type: 'REMOVE_POST',
    index: post,
  };
};
