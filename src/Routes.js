import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import All from "./pages/All";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/todos" component={All} />

        <Route path="/about" component={About} />
        <Route
          render={function() {
            return <div className="not-found"><h1>404</h1> Not Found</div>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
