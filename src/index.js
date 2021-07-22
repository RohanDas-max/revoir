import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Users from "./pages/Users"
import Profile from "./pages/Profile"
import Post from "./pages/Post"
import NotFound from "./pages/NotFound"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/users/:userid" component={Profile} />
      <Route exact path="/:userid/posts" component={Post} />
      <Route  component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById("root"));
