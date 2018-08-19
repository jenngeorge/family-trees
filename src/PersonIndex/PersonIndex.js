import React from 'react';
import { Link } from "react-router-dom";
import './personIndex.css';
import db from '../db';


const PersonIndex = () => (

  <div className="PersonIndex">

    <h1 className="PersonIndex-header">
      Hustle Family Tree
    </h1>
    <h2 className="PersonIndex-subheader">
      select your name to begin exploring
    </h2>

    <ul>
      {db.sort((personA, personB) => {
        if (personA["firstName"] < personB["firstName"]) //sort string ascending
          return -1;
        if (personA["firstName"] > personB["firstName"])
          return 1;
        return 0;
      }).map(person => (
        <li key={person["id"]} className="PersonIndex-li">
          <Link to={`${person["id"]}`}>
            {person["firstName"] + " " + person["lastName"]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default PersonIndex;
