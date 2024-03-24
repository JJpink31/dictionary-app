import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [results, setResults] = useState(null);
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "f8833caao3caf01e1ffbc8t348acfb03";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
