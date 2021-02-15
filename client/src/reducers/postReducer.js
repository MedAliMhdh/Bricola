import { GET_POSTS, POST_ERROR } from "../actions/types";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

const post_Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    case POST_ERROR:
      return {
        ...state,
        posts: null,
        loading: null,
        error: payload,
      };
    default:
      return state;
  }
};

export default post_Reducer;
