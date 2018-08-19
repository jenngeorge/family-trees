import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import logo from './logo.svg';
import './person.css';

import peopleDict from '../peopleDict.js'

class Person extends Component {

  state = {
    parentList: true,
    siblingList: true,
    childrenList: true,
  }

  toggleRelationList(relation) {
    console.log(relation)
    console.log(this.state[relation+ "List"])
    this.setState({[relation + "List"]: !this.state[relation + "List"]})
  }

  // relation = 'parent', 'children', or 'sibling'
  relationList(person, relation) {
    const relationKey = relation + "Ids";
    const relationIds = person[relationKey]

    let list;
    if (this.state[relation + "List"]) {
      list = (
        <ul>
          {relationIds.map(relationId => (
            <li key={relationId}>
              <Link to={`${relationId}`}>
                {peopleDict[relationId]["firstName"] + " " + peopleDict[relationId]["lastName"]}
              </Link>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <div>
        <h2> {relation} : {relationIds.length} </h2>
        {relationIds.length > 0 ? (
          <button onClick={this.toggleRelationList.bind(this, relation)}>
            {this.state[relation + "List"] ? "hide" : "show"}
          </button>
        ) : undefined }
        {list}
      </div>
    )
  }

  render() {
    const person = peopleDict[this.props.match.params["personId"]]
    return (
      <div>
        <h1> Name: {person["firstName"] + " " + person["lastName"]} </h1>

        <div>
          {this.relationList(person, "parent")}
          {this.relationList(person, "sibling")}
          {this.relationList(person, "children")}
        </div>


      </div>

    );
  }
}

export default Person;
