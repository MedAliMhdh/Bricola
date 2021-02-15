import axios from "axios";
import { GET_POSTS, POST_ERROR } from "./types";
import { useSelector } from "react-redux";

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
