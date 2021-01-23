import React from "react";

import { Authentication } from "./pages";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <Route path={["/login", "/register"]} exact>
        <Authentication />
      </Route>
    </div>
  );
}

export default App;
