import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_EARTHQUAKE_SEARCH_RESULT = "SET_EARTHQUAKE_SEARCH_RESULT";

/**
 * INITIAL STATE
 */
const defaultState = {
  earthquakes: [],
};

/**
 * ACTION CREATORS
 */
const setEarthquakeSearchResult = (earthquakes) => ({
  type: SET_EARTHQUAKE_SEARCH_RESULT,
  earthquakes,
});

/**
 * THUNK CREATORS
 */
export const getSearchResult = (location, radius, start, end) => async (
  dispatch
) => {
  try {
    const response = await axios(
      `/api/earthquakes/?location=${location}&radius=${radius}&startDate=${start}&endDate=${end}`
    );

    dispatch(setEarthquakeSearchResult(response.data));
  } catch (err) {
    console.error(err);
    // dispatch(setQueryError(err.message));
  }
};

/**
 * REDUCER
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_EARTHQUAKE_SEARCH_RESULT:
      return { earthquakes: action.earthquakes };
    default:
      return state;
  }
}