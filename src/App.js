import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Person from './Person/Person';
import PersonIndex from './PersonIndex/PersonIndex';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={PersonIndex}/>
      <Route path="/:personId" component={Person}/>
    </div>
  </Router>
);

export default App;
