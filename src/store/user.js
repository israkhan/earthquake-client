import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_USER = "SET_USER";

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const setUser = (user) => ({ type: SET_USER, user });

/**
 * THUNK CREATORS
 */
export const createUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/", user);
    dispatch(setUser(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const getUser = (uid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/users/${uid}`);
    dispatch(setUser(res.data));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
