// Core libraries to use React
import React from "react";
import ReactDOM from "react-dom";

// Library to add additional pages
import { BrowserRouter } from "react-router-dom";

//Library for state management and the store that's created to manage the state
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
