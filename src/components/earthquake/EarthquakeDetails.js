import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { getReports } from "../../store";

const EarthquakeDetail = (props) => {
  const fetchReports = async () => {
    await props.getReports(props.match.params.id);
  };
  useEffect(() => {
    fetchReports();
  }, []);

  const reports = props.reports || [];

  return (
    <div style={{ display: "flex", margin: "20px", justifyContent: "center" }}>
      <TableContainer component={Paper} style={{ width: "50%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell component="th" scope="row">
                  {`${report.firstName.toUpperCase()} ${report.lastName.toUpperCase()}`}
                </TableCell>
                <TableCell align="right">
                  {report.status.toUpperCase()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapState = (state) => ({
  reports: state.reports.reports,
});

const mapDispatch = (dispatch) => ({
  getReports: (quakeId) => dispatch(getReports(quakeId)),
});

export default connect(mapState, mapDispatch)(EarthquakeDetail);
