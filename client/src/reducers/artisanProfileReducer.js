import {
  PROFILE_ERROR,
  GET_PROFILE,
  CLEAR_PROFILE,
  GET_PROFILES,
  SELECT_JOB,
  SELECT_EQUIPMENT,
  SELECT_CITY,
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

export const artisanProfileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };

    case SELECT_JOB:
      return {
        ...state,
        profiles: state.profiles.filter(
          (artisan) => (artisan.user.job = action.payload)
        ),
      };
    case SELECT_EQUIPMENT:
      return {
        ...state,
        profiles: state.profiles.filter(
          (artisan) => (artisan.equipment = action.payload)
        ),
      };
    case SELECT_CITY:
      return {
        ...state,
        profiles: state.profiles.filter(
          (artisan) => (artisan.city = action.payload)
        ),
      };

    default:
      return state;
  }
};
