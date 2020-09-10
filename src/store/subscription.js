import axios from "axios";

/**
 * ACTION TYPES
 */
const POST_SUBSCRIPTION = "POST_SUBSCRIPTION";

/**
 * INITIAL STATE
 */
const defaultSubscription = {};

/**
 * ACTION CREATORS
 */
const postSubscription = (subscription) => ({
  type: POST_SUBSCRIPTION,
  subscription,
});

/**
 * THUNK CREATORS
 */
export const createSubscription = (subscription) => async (
  dispatch,
  getState
) => {
  try {
    const uid = getState().auth.uid;
    const res = await axios.post(`/api/subscriptions/${uid}`, subscription);
    dispatch(postSubscription(res.data));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function (state = defaultSubscription, action) {
  switch (action.type) {
    case POST_SUBSCRIPTION:
      return action.subscription;
    default:
      return state;
  }
}
