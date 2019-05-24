import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./assets/styles/global";

import Header from "./components/Header";

import Routes from "./routes";

import { Provider } from "react-redux";
import store from "./store";

export default () => (
  <>
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  </>
);
