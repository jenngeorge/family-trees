import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Person from './Person/Person';
import PersonIndex from './PersonIndex/PersonIndex';

import db from './db';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={PersonIndex}/>
      <Route path="/:personId" component={Person}/>
    </div>
  </Router>
);

export default App;
