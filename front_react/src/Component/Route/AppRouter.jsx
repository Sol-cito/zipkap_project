import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Login from "../Login";
import Home from "../Home";
import Registration from "../Registration";

const AppRouter = () => {
  return (
    <div>
      <NavigationBar />
      <BrowserRouter>
        <div style={style}>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/Login" exact={true} component={Login} />
            <Route path="/Registration" exact={true} component={Registration} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

const style = {
  color: "red",
  margin: "10px",
};

export default AppRouter;
