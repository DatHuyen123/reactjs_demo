import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducer/rootReducer";
import Login from "./components/login/Login";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <App />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
