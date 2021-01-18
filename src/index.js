import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import "antd/dist/antd.css";

import DefaultLayout from "./layouts/DefaultLayout";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home"

import { Switch, Router } from "react-router-dom";
import history from "./util/history";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import myReducer from "./redux/reducers/index";
import mySaga from "./redux/sagas";

import { ThemeProvider } from "styled-components";
import themes from "./constants/themes";

import "antd/dist/antd.css";

const sagaMiddleware = createSagaMiddleware();
const myStore = createStore(
  myReducer,
  applyMiddleware(...[sagaMiddleware, logger])
);
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <ThemeProvider theme={themes}>
        <Router history={history}>
          <Switch>
            <DefaultLayout exact path="/product" component={ProductList} />
            <DefaultLayout exact path="/" component={Home} />
            <DefaultLayout
              exact
              path="/products/:id"
              component={ProductDetail}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
