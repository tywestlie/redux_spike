import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = (dataArray) => dispatch => {
  fetch('https://e11gjajxwe.execute-api.us-east-1.amazonaws.com/dev/notes')
  .then(res => res.json())
  .then(data => Object.values(data))
  .then(data => data[0])
  .then(posts => 
    dispatch({
      type: FETCH_POSTS,
      payload: posts
    })
  );
};

export const createPost = postData => dispatch => {
  fetch('https://e11gjajxwe.execute-api.us-east-1.amazonaws.com/dev/notes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};