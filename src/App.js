import React from "react";
import { Route } from "react-router-dom";

import { Authentication, Home } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Route path={["/register", "/login"]} exact>
        <Authentication />
      </Route>
      <Route path={"/im"} exact>
        <Home />
      </Route>
    </div>
  );
}

export default App;
