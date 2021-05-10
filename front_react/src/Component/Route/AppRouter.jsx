import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Login from "../Login/Login";
import Home from "../Home";
import Registration from "../Registration/Registration";
import RegistrationSuccess from "../Registration/RegistrationSuccess";
import MyPage from "../MyPage/MyPage";

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
            <Route
              path="/RegistrationSuccess"
              component={RegistrationSuccess}
            />
            <Route path="/MyPage" component={MyPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;
