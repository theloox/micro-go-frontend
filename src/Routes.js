import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />
        <Route
          render={function() {
            return <div class="not-found"><h1>404</h1> Not Found</div>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
