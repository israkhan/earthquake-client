import { auth } from "../firebase";

/**
 * ACTION TYPES
 */
const SET_AUTH_CONFIRMATION = "SET_AUTH_CONFIRMATION";
const SET_SIGN_IN_ERROR = "SET_SIGN_IN_ERROR";
const SET_SIGN_UP_ERROR = "SET_SIGN_UP_ERROR";

/**
 * INITIAL STATE
 */
const defaultState = {};

/**
 * ACTION CREATORS
 */
const setAuthConfirmation = (authDetails) => ({
  type: SET_AUTH_CONFIRMATION,
  authDetails,
});

const setSignInError = (message) => ({
  type: SET_SIGN_IN_ERROR,
  message,
});

const setSignUpError = (message) => ({
  type: SET_SIGN_UP_ERROR,
  message,
});

/**
 * THUNK CREATORS
 */
export const signIn = (email, password) => async (dispatch) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    dispatch(setAuthConfirmation({ isLoggedIn: true, uid: user.uid }));
  } catch (err) {
    dispatch(setSignInError(err.message));
  }
};

export const signUp = (email, password) => async (dispatch) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    dispatch(setAuthConfirmation({ isLoggedIn: true, uid: user.uid }));
  } catch (err) {
    dispatch(setSignUpError(err.message));
  }
};

/**
 * REDUCER
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_AUTH_CONFIRMATION:
      return {
        ...state,
        isLoggedIn: action.authDetails.isLoggedIn,
        uid: action.authDetails.uid,
      };
    case SET_SIGN_IN_ERROR:
      return { ...state, signInError: action.message };
    case SET_SIGN_UP_ERROR:
      return { ...state, signUpError: action.message };
    default:
      return state;
  }
}
