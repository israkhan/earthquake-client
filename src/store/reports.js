import axios from "axios";

/**
 * ACTION TYPES
 */
const CREATE_REPORT = "CREATE_REPORT";
const SET_REPORTS = "SET_REPORTS";

/**
 * INITIAL STATE
 */
const defaultReport = {
  reports: [],
  singleReport: {},
};

/**
 * ACTION CREATORS
 */
const postReport = (report) => ({
  type: CREATE_REPORT,
  report,
});

const setReports = (reports) => ({
  type: SET_REPORTS,
  reports,
});

/**
 * THUNK CREATORS
 */
export const createReport = (report) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/reports/`, report);
    dispatch(postReport(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const getReports = (quakeId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/reports/${quakeId}`);
    dispatch(setReports(res.data));
  } catch (err) {
    console.error(err);
  }
};
/**
 * REDUCER
 */
export default function (state = defaultReport, action) {
  switch (action.type) {
    case CREATE_REPORT:
      return { ...state, singleReport: action.report };
    case SET_REPORTS:
      return { ...state, reports: action.reports };
    default:
      return state;
  }
}
