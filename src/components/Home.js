import React, { useEffect } from "react";
import { connect } from "react-redux";
import EarthquakeSearchScreen from "./earthquake/EarthquakeSearchScreen";
import NavBar from "./NavBar";
import { getUser } from "../store/user";

function Home(props) {
  useEffect(async () => {
    await props.fetchUser(props.uid);
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
