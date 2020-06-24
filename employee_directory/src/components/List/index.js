import React from "react";
import "./style.css";

function List({ dataRows }) {
  return( 
    <>
    {dataRows.map(emp => (
      <div className="row" id="dataRow" key={emp.username}>
        <div className="col-3 col d-flex align-items-center justify-content-center">
          <img src={emp.picture.large} alt={emp.name.last}></img>
        </div>
        <div className="col-4">
          <h5><strong>Name:</strong> {emp.name.first} {emp.name.last}</h5>
          <h5><strong>Age:</strong> {emp.dob.age}</h5>
          <h5><strong>Gender:</strong> {emp.gender}</h5>
          <h5><strong>Location:</strong> {emp.location.city}, {emp.location.state}</h5>
        </div>
        <div className="col-5">
          <div className="Container" id="credentials">
            <p><strong>Email:</strong> {emp.email}</p>
            <p><strong>SSN:</strong> {emp.id.value}</p>
            <p><strong>Username:</strong> {emp.login.username}</p>
            <p><strong>Password:</strong> {emp.login.password}</p>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

export default List;
