import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/About" component={About} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Appointment" component={Appointment} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Locations" component={Contact} /> */}

      </div>

    </Router>
  );
}

export default App;
