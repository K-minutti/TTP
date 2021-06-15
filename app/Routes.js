import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import TextHome from "./components/TextHome";
import FocusMode from "./components/FocusMode";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Route exact path="/" component={TextHome} />
        <Route exact path="/focus" component={FocusMode} />
      </main>
    </Router>
  );
};

export default Routes;
