import React, { Fragment } from "react";
import Header from "./common/header/index.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Home from "./page/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" render={() => <div>detail</div>}></Route>
              <Route path="/detail-side" render={() => <div>side</div>}></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;
