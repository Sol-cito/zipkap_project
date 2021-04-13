import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Login from "../Login";
import Home from "../Home";
import Registration from "../Registration";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <div className="route">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Registration" component={Registration} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;
