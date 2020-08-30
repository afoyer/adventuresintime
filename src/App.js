import React from "react";
import "./styles/app.scss";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import About from "./pages/About";
function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <Switch location={location} key={location.key}>
        <Route key="about" path="/about">
          <About />
        </Route>
        <Route key="home" path="/" exact>
          <HomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
