import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import List from "../../components/List";
import API from "../../utils/API";

function Search() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees()
  },[])

  function loadEmployees() {
    API.searchEmps()
      .then(res => {
        setEmployees(res.data.results)
      })
      .catch(err => console.log(err));
  }

  return (
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <List dataRows={employees}>
          </List>
        </Container>
      </div>
  );
}

export default Search;
