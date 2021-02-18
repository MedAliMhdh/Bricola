import axios from "axios";
import {
  ADD_POST,
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
} from "./types";
import { setAlert } from "./alert";

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
      "Content-Type": "application/json",
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
    dispatch(getPosts());
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add Likes
export const updateLikes = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}api/posts/like/${postId}`
    );
    dispatch({
      type: UPDATE_LIKES,
      payload: { id: postId, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete Post
export const deletePost = (postId) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}api/posts/${postId}`
    );
    dispatch({
      type: DELETE_POST,
      payload: postId,
    });

    dispatch(setAlert("Post Removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
