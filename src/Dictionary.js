import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Typewriter from "typewriter-effect";

export default function Dictionary() {
  let [results, setResults] = useState(null);
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function getDefintion(response) {
    new Typewriter(".results", {
      strings: response.data,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(apiUrl).then(getDefintion);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <img
        src="https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-book-clipart-vector-png-image_6653535.png"
        width={150}
        className="introImg"
      />
      <h1 className="text-center mt-5">Dictionary</h1>
      <h2 className="introQuestion">What word do you want to look up? </h2>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <div className="hint">
        suggested words: sunset, koloa, orchid, kismet...
      </div>
      <section>
        <Results results={results} />
      </section>
    </div>
  );
}
