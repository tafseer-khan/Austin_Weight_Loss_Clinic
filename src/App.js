import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About"
import Services from "./pages/Services"
import Appointment  from "./pages/Appointment"
import Contact from "./pages/Contact"
import Home from "./pages/Home"


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Appointment" component={Appointment} />
        <Route exact path="/Contact" component={Contact} />

      </div>

    </Router>
  );
}

export default App;
