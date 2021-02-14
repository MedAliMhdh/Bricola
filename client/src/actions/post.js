import axios from "axios";
import { setAlert } from "./alert";
import { GET_POST, POST_ERROR } from "./types";
import { useSelector } from "react-redux";

//Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const state = useSelector((state) => state.auth);
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}api/posts/user/${state.user.id}`
    );
    console.log("res:", res);

    dispatch({ type: GET_POST, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
