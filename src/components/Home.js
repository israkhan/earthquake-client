import React, { useEffect } from "react";
import { connect } from "react-redux";

import { NavBar, EarthquakeSearchScreen } from "./";
import { getUser } from "../store";

function Home(props) {
  const fetchData = async () => {
    await props.fetchUser(props.uid);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "65px" }}>
        <EarthquakeSearchScreen />
      </div>
    </div>
  );
}

const mapState = (state) => ({
  uid: state.auth.uid,
});

const mapDispatch = (dispatch) => ({
  fetchUser: (uid) => dispatch(getUser(uid)),
});

export default connect(mapState, mapDispatch)(Home);
