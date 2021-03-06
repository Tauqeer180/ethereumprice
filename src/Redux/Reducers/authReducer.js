import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGOUT_SUCCESS
} from "../Actions/types";

const initialState = {
  token: localStorage.getItem('token'),
  isLoading: false,
  isAuthenticated: null,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
      break;
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
      break;
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        user:action.payload.user,
        token:action.payload.token,
        isAuthenticated: true,
        isLoading: false
      };
      break;
    case LOGIN_FAILED:
    case REGISTER_FAILED:
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token')
        return {
            ...state,
            isLoading:false,
            isAuthenticated:false,
            token:null,
            user: null
        }
      break;
    default:
      return state;
  }
}
