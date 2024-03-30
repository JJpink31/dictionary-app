import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [results, setResults] = useState(null);
  let [keyword, setKeyword] = useState("");
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "BYZWo9KWiFRP53944yTPSFcAglD68OplocWp9DgIB7bcRQ5mLFTVxjv4";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </section>
    </div>
  );
}
