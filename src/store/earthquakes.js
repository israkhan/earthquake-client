import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_EARTHQUAKE_SEARCH_RESULT = "SET_EARTHQUAKE_SEARCH_RESULT";

const SET_EARTHQUAKE = "SET_EARTHQUAKE";

/**
 * INITIAL STATE
 */
const defaultState = {
  earthquakes: [],
  earthquake: {},
};

/**
 * ACTION CREATORS
 */
const setEarthquakeSearchResult = (earthquakes) => ({
  type: SET_EARTHQUAKE_SEARCH_RESULT,
  earthquakes,
});

const setEarthquake = (earthquake) => ({
  type: SET_EARTHQUAKE,
  earthquake,
});
/**
 * THUNK CREATORS
 */
export const getSearchResult = (location, radius, start, end) => async (
  dispatch
) => {
  try {
    const response = await axios.get(
      `/api/earthquakes/?location=${location}&radius=${radius}&startDate=${start}&endDate=${end}`
    );

    const data = response.data;
    dispatch(setEarthquakeSearchResult(data));

    data.forEach(async (quake) => {
      await axios.post(`/api/earthquakes/`, quake);
    });
  } catch (err) {
    console.error(err);
    // dispatch(setQueryError(err.message));
  }
};

export const getEarthquake = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/earthquakes/${id}`);

    const data = response.data;
    dispatch(setEarthquake(data));
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
      return { ...state, earthquakes: action.earthquakes };
    case SET_EARTHQUAKE:
      return { ...state, earthquake: action.earthquake };
    default:
      return state;
  }
}
