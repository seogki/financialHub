import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default App;
 