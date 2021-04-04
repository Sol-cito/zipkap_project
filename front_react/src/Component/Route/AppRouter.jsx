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
        <div style={style}>
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

const style = {
  color: "blue",
  margin: "10px",
};

export default AppRouter;
