import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "@Components/desktop/Footer";
import Header from "@Components/desktop/Header";
import Login from "@Components/desktop/login/Login";
import Main from "@Components/desktop/main/Main";
import "@Css/common.scss";
import { Fragment } from "react";

const desktop = () => {
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

export default desktop;
