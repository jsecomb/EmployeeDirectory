import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

function List({ dataRows }) {
  return( 
  <ul>
    {dataRows.map(emp => (
    <li>{emp.gender}</li>
    ))}
  </ul>
  )
}

export default List;
