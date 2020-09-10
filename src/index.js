import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";

import App from "./components/App";
import history from "./history";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <Routes>
      <App />
    </Routes>
  </Provider>,
  document.getElementById("root")
);
