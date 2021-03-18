import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import "@Css/common.scss";
const App = () => (
  <div className={"flex-vertical full-size"}>
    <Header />
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/Home" component={Main}></Route>
      <Redirect to="/" />
      {/* <Route render={({location}) => (
            <div>
              <h2>NOT FOUND 404</h2>
              <p>{location.pathname}</p>
            </div>
          )}
      /> */}
    </Switch>
    <Footer />
  </div>
);

export default App;
