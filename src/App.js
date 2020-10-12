import React, { Fragment } from "react";
import Header from "./common/header/index.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js"
function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Header></Header>
      </Provider>
    </Fragment>
  );
}

export default App;
