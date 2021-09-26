import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Navbar1 from "./pages/Navbar";
import Footer from "./supporting/Footer";

export default function Routes() {
  const error = () => {
    return (
      <div className="container bg-danger text-center mt-3 text-light py-3">
        <p>
          <strong> Page does not exist</strong>
        </p>
      </div>
    );
  };

  return (
    <Router>
      <>
        <Navbar1 />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/aboutus" component={About} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/events" component={Events} />
          <Route component={error} />
        </Switch>

        <Footer/>
      </>
    </Router>
  );
}
