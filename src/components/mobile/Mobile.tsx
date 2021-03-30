import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import Footer from "@Components/mobile/Footer";
import Header from "@Components/mobile/Header";
import Login from "@Components/mobile/login/Login";
import "@Css/common.scss";
const Main = lazy(() => import("@Components/mobile/main/Main"));
const mobile = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/Home" component={Main}></Route>
          </Suspense>
          <Redirect to="/" />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </Fragment>
  );
};

export default mobile;
