import { GET_POST, POST_ERROR } from "../actions/types";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

const post_Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POST:
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default post_Reducer;
