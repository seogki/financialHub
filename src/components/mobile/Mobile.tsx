import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "@Components/mobile/Footer";
import Header from "@Components/mobile/Header";
import Login from "@Components/mobile/login/Login";
import Main from "@Components/mobile/main/Main";
import "@Css/common.scss";
const mobile = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/Home" component={Main}></Route>
        <Redirect to="/" />
      </Switch>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default mobile;
