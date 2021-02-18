import {
  GET_POSTS,
  POST_ERROR,
  ADD_POST,
  UPDATE_LIKES,
  DELETE_POST,
} from "../actions/types";

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

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
        loading: false,
      };

    case POST_ERROR:
      return {
        ...state,
        posts: null,
        loading: null,
        error: payload,
      };

    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      };
    default:
      return state;
  }
};

export default post_Reducer;
