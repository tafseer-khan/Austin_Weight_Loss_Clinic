import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Schedule from './pages/Schedule.js'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init({
  })
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Schedule" component={Schedule} />
        <Route path='*' component={Home} />
        

      </Switch>

    </Router>
  );
}

export default App;
