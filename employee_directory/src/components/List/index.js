import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

function List({ name }) {
  console.log(name)
  return <ul className="list-group">
  (
    <li>word</li>
  )
  </ul>
}

export default List;
