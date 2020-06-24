import React from "react";

function SearchControls(props) {
    return (
        <>
        <h4 className="control-labels">Filter employees by Gender</h4>
        <div className="btn-group">
            <button type="button" className="btn btn-outline-light btn-secondary btn-lg" name="male" onClick={props.genderFilter}>Male</button>
            <button type="button" className="btn btn-outline-light btn-secondary btn-lg" name="female" onClick={props.genderFilter}>Female</button>
            <button type="button" className="btn btn-outline-light btn-secondary btn-lg" name="all" onClick={props.genderFilter}>All</button>
        </div>
        <h4 className="control-labels">Sort Employees by Age</h4>
        <div className="btn-group">
            <button type="button" className="btn btn-outline-light btn-secondary btn-lg" name="age" value="ascending" onClick={props.ascending}>Yes</button>
            <button type="button" className="btn btn-outline-light btn-secondary btn-lg" name="age" value="all" onClick={props.ascending}>No</button>
        </div>
        </>
    )
}

export default SearchControls;