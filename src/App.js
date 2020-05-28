import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/login" component={LoginPage} exact />

      <Route
        path="/logout"
        exact
        render={(props) => {
          localStorage.removeItem("login_token");
          props.history.push("/login");
        }}
      />

      <Route path="/home" component={HomePage} />
    </Switch>
  );
}
