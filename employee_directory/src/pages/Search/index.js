import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import SearchControls from "../../components/SearchControls";
import List from "../../components/List";
import API from "../../utils/API";

function Search() {

  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [filterSettings, setFilterSettings] = useState({
    gender: "all",
    age: "all"
  })

  useEffect(() => {
    loadEmployees()
  },[])

  function loadEmployees() {
    API.searchEmps()
      .then(res => {
        setFilteredEmployees(res.data.results)
        setEmployees(res.data.results)
      })
      .catch(err => console.log(err));
  }

  function genderFilter(event){
    setFilterSettings({...filterSettings, gender: event.target.name})
    switch (filterSettings.age){
      case "all":
        if (event.target.name === "all"){
          setFilteredEmployees((employees.sort(function(a, b){return 0.5 - Math.random()})))
        }
        else{
          setFilteredEmployees(employees.filter(emp => emp.gender === event.target.name))
        }
      break;
      case "ascending":
        if (event.target.name === "all"){
          setFilteredEmployees(employees.sort(function(a, b){return a.dob.age - b.dob.age}))
        }
        else{
          setFilteredEmployees(employees.filter(emp => emp.gender === event.target.name).sort(function(a, b){return a.dob.age - b.dob.age}))
        }
      break;
      default:
      break;
    }
  }
  
  function ascending(event) {
    setFilterSettings({...filterSettings, [event.target.name]: event.target.value})
    switch (event.target.value){
      case "ascending":
        if (filterSettings.gender === "all"){
          setFilteredEmployees(employees.sort(function(a, b){return a.dob.age - b.dob.age}))
          console.log("ascending age, all gender")
        }
        else {
          setFilteredEmployees(employees.sort(function(a, b){return a.dob.age - b.dob.age}).filter(emp => emp.gender === filterSettings.gender))
          console.log("ascending age, gender filtered gender")
        }
      break;
      case "all":
        if (filterSettings.gender === "all"){
          console.log("all age, all gender")
          setFilteredEmployees((employees.sort(function(a, b){return 0.5 - Math.random()})))
        }
        else {
          console.log("all age, gender filtered")
          setFilteredEmployees(employees.filter(emp => emp.gender === filterSettings.gender).sort(function(a, b){return 0.5 - Math.random()}))
        }
      break;
      default:
      break;
    }
    
  }

  return (
    <Container style={{ minHeight: "100vh" }}>
      <SearchControls 
        genderFilter={genderFilter}
        ascending={ascending}/>
      <List dataRows={filteredEmployees}/>
    </Container>
  );
}

export default Search;
