import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './person.css';

import peopleDict from '../peopleDict.js'

class Person extends Component {

  state = {
    parentList: true,
    siblingList: true,
    childrenList: true,
  }

  toggleRelationList(relation) {
    this.setState({[relation + "List"]: !this.state[relation + "List"]})
  }

  // relation = 'parent', 'children', or 'sibling'
  relationList(person, relation) {
    const relationKey = relation + "Ids";
    const relationIds = person[relationKey]
    const pluralize = {parent: "parents", sibling: "siblings", children: "children"}

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
      <div className="Person-relation-group">
        <h2>
          {pluralize[relation]} : {relationIds.length}
          {relationIds.length > 0 ? (
            <button onClick={this.toggleRelationList.bind(this, relation)}>
              {this.state[relation + "List"] ? "hide" : "show"}
            </button>
          ) : undefined }
         </h2>
        {list}
      </div>
    )
  }

  render() {
    const person = peopleDict[this.props.match.params["personId"]]
    return (
      <div className="Person">
        <Link to={"/"}>People Index</Link>
        <h1> name: {person["firstName"] + " " + person["lastName"]} </h1>
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
