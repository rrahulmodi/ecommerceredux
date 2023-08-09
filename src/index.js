import React from "react";
import ReactDOM from "react-dom/client";
import store from "./ecommerceRedux/store/store";
import Main from "./ecommerceRedux/Main.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
