import axios from 'axios';
import { ADD_POST, GET_POSTS, POST_ERROR } from './types';

//Get posts
export const getPosts = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}api/posts/user/${userId}`
    );

    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add Post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}api/posts`,
      formData,
      config
    );
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
    dispatch(getPosts);
  } catch (error) {}
};
