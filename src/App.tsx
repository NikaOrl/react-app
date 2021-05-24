import React from "react";
import { Provider } from "react-redux";
import { StaticRouter as Router } from "react-router-dom";

import HomePage from "./containers/HomePage/HomePage";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>
  );
}

export default App;
