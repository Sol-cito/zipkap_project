import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Login from "../Login/Login";
import Home from "../Home";
import Registration from "../Registration/Registration";
import RegistrationSuccess from "../Registration/RegistrationSuccess";
import MyPage from "../MyPage/MyPage";
import Withdrawal from "../MyPage/Withdrawal";
import PasswordChange from "../MyPage/PasswordChange";
import Footer from "../Footer";

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
            <Route path="/Withdrawal" component={Withdrawal} />
            <Route path="/PasswordChange" component={PasswordChange} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;
