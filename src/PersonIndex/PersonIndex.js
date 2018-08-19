import React from 'react';
import { Link } from "react-router-dom";
import './personIndex.css';
import db from '../db';


const PersonIndex = () => (

  <div className="PersonIndex">
    <header className="PersonIndex-header">
      <h1 className="PersonIndex-title">PERSON INDEX: Who are you?</h1>
    </header>

    <ul>
      {db.map(person => (
        <li key={person["id"]}>
          <Link to={`${person["id"]}`}>
            {person["firstName"] + " " + person["lastName"]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default PersonIndex;
