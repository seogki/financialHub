import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "@Css/common.scss";
// import Footer from "@Components/desktop/Footer";
import Header from "@Components/desktop/Header";
import Login from "@Components/desktop/login/Login";
const Main = lazy(() => import("@Components/desktop/main/Main"));

const desktop = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Suspense fallback={<h3>Loading...</h3>}>
            <Route path="/Home" component={Main}></Route>
          </Suspense>
          <Redirect to="/" />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </Fragment>
  );
};

export default desktop;
