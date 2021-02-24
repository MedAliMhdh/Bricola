import {
  PROFILE_ERROR,
  GET_PROFILE,
  CLEAR_PROFILE,
  CLEAR_PROFILES,
  GET_PROFILES,
  SELECT_JOB,
  SELECT_EQUIPMENT,
  SELECT_CITY,
  SELECT_RATE,
  EVALUATE_ARTISAN,
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
    case CLEAR_PROFILES:
      return {
        ...state,
        profiles: null,
        loading: false,
      };

    case SELECT_JOB:
      return {
        ...state,
        profiles: state.profiles.filter(
          (artisan) => artisan.user.job === payload
        ),
      };
    case SELECT_EQUIPMENT:
      return {
        ...state,
        profiles: state.profiles.filter(
          (artisan) => artisan.equipment === payload
        ),
      };
    case SELECT_CITY:
      return {
        ...state,
        profiles: state.profiles.filter((artisan) => artisan.city === payload),
      };
    case SELECT_RATE:
      const rate = state.profiles.map((artisan) =>
        artisan.rate.length > 0
          ? artisan.rate.reduce((acc, rate) => acc + rate.value, 0) /
            artisan.rate.length
          : 0
      );

      return {
        ...state,
        profiles: state.profiles.filter((artisan, i) => rate[i] >= payload),
      };

    case EVALUATE_ARTISAN:
      return {
        ...state,
        profile: { ...state.profile, rate: payload.rates },
        profiles: state.profiles.map((profile) =>
          profile.user._id === payload.profileId
            ? { ...profile, rate: payload.rates }
            : profile
        ),
      };

    default:
      return state;
  }
};
