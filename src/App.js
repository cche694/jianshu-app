import React, { Fragment } from "react";
import Header from "./common/header/index.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Home from "./page/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./page/detail/loadable";
import Login from "./page/login";
import Write from "./page/write";
function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route path="/write" component={Write}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/" exact component={Home}></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;
