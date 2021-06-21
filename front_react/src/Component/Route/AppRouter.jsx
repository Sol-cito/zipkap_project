import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Login from "../Login/Login";
import Home from "../Home";
import Registration from "../Registration/Registration";
import RegistrationSuccess from "../Registration/RegistrationSuccess";
import Cart from "../Cart/GetCartList";
import MyPage from "../MyPage/MyPage";
import Withdrawal from "../MyPage/Withdrawal";
import PasswordChange from "../MyPage/PasswordChange";
import FreeBoard from "../FreeBoard/FreeBoard";
import EditPost from "../FreeBoard/EditPost";
import CurrentPost from "../FreeBoard/CurrentPost";
import Footer from "../Footer";
import Detail from "../Detail/Detail";
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
            <Route path="/Cart" component={Cart} exact />
            <Route path="/MyPage" component={MyPage} exact />
            <Route path="/MyPage/Withdrawal" component={Withdrawal} exact />
            <Route
              path="/MyPage/PasswordChange"
              component={PasswordChange}
              exact
            />
            <Route path="/FreeBoard" component={FreeBoard} exact />
            <Route path="/FreeBoard/EditPost" component={EditPost} exact />
            <Route
              path="/FreeBoard/CurrentPost/:post_seq"
              component={CurrentPost}
            />
            <Route path="/Detail" component={Detail} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;
