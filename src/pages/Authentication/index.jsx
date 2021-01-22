import React from "react";
import { Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import "./Authentication.scss";

const Authentication = () => {
  return (
    <section className={"auth"}>
      <div className="auth__content">
        <Route path={"/login"} exact>
          <LoginForm />
        </Route>
        <Route path={"/register"} exact>
          <RegisterForm />
        </Route>
      </div>
    </section>
  );
};

export default Authentication;
