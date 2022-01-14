import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import Main from "./views/Main";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
