import React from "react";
import "./style.css";

function SearchControls(props) {
    return (
        <>
        <h1>Employee Information Portal</h1>
        <div className="row" id="container">
            <div className="col-6" id="controlPanelL">
                <div className="row">
                    <h4 className="controlLabels" id="controlLabels"><strong>Filter Employees by Gender</strong></h4>
                </div>
                <div className="row">
                    <div className="btn-group" id="controlBtns">
                        <button type="button" className="btn btn-outline-light btn-secondary btn-lg" name="gender" value="male" onClick={props.genderFilter}>Male</button>
                        <button type="button" className="btn btn-outline-light btn-secondary btn-lg" name="gender" value="female" onClick={props.genderFilter}>Female</button>
                        <button type="button" className="btn btn-outline-light btn-secondary btn-lg" name="gender" value="all" onClick={props.genderFilter}>All</button>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <h4 className="controlLabels" id="controlLabels"><strong>Sort Employees by Age</strong></h4>
                </div>
                <div className="row">
                    <div className="btn-group" id="controlBtns">
                        <button type="button" className="btn btn-outline-light btn-secondary btn-lg" name="age" value="ascending" onClick={props.ascending}>Yes</button>
                        <button type="button" className="btn btn-outline-light btn-secondary btn-lg" name="age" value="all" onClick={props.ascending}>No</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchControls;