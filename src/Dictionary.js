import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

   function handleResponse(response) {
    setResults(response.data);
   } 
    function search(event) {
        event.preventDefault()
    // documentation:https://www.shecodes.io/learn/apis/dictionary //

    let apiKey = "57b13ef26a049644t26b08bo9241280d"
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