import {
  PROFILE_PERSON_ERROR,
  GET_PERSON_PROFILE,
  CLEAR_PERSON_PROFILE,
  GET_PERSON_PROFILES,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

export const personProfileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PERSON_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case GET_PERSON_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };

    case PROFILE_PERSON_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case CLEAR_PERSON_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };
    default:
      return state;
  }
};
