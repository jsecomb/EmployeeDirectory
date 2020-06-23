import React, { useContext } from "react";
import ArticleContext from "../../utils/ArticleContext";
import "./style.css";

function SearchResults() {
  const {title, url} = useContext(ArticleContext);
  return (
    <>
    <p>results</p>
    </>
  );
}
export default SearchResults;
