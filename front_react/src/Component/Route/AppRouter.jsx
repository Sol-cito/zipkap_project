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
import FreeBoard from "../FreeBoard/FreeBoard";
import NewPost from "../FreeBoard/NewPost";
import CurrentPost from "../FreeBoard/CurrentPost";
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
            <Route path="/MyPage" component={MyPage} exact />
            <Route path="/MyPage/Withdrawal" component={Withdrawal} exact />
            <Route path="/MyPage/PasswordChange" component={PasswordChange} exact />
            <Route path="/FreeBoard" component={FreeBoard} exact />
            <Route path="/FreeBoard/NewPost" component={NewPost} exact />
            <Route path="/FreeBoard/CurrentPost/:post_seq" component={CurrentPost} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;
