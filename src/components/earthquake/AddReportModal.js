import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";
import { Typography, TextField, MenuItem, Button } from "@material-ui/core";

import { createReport } from "../../store";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#f4f1de",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const statusOptions = [
  {
    value: "safe",
    label: "Safe",
  },
  {
    value: "missing",
    label: "Missing",
  },
];

function AddReportModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("safe");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmission = () => {
    props.addReport({
      firstName,
      lastName,
      status,
      phoneNumber,
      quakeId: props.quakeId,
    });
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h6">Create Report</Typography>
      <Typography variant="body1">
        Report status of you or someone lelse. You can report yourself safe or
        report another individual safe or missing.
      </Typography>
      <TextField
        label="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        fullWidth={true}
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        fullWidth={true}
      />
      <TextField
        id="status-select"
        select
        label="Status"
        value={status}
        onChange={(event) => setStatus(event.target.value)}
        fullWidth={true}
        style={{ marginTop: "5px" }}
      >
        {statusOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      <Typography variant="body2">
        Please leave a phone number if you would like to be notified of a staus
        update.
      </Typography>
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
        fullWidth={true}
      />
      <Button
        variant="contained"
        color="primary"
        margin="normal"
        style={{ backgroundColor: "#3d405b", margin: "5px" }}
        onClick={handleSubmission}
      >
        Submit Report
      </Button>
    </div>
  );

  return (
    <div>
      <Button onClick={handleOpen} size="small">
        Add Report
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  addReport: (report) => dispatch(createReport(report)),
});

export default connect(null, mapDispatch)(AddReportModal);
