import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

   function handleDictionaryResponse(response) {
    setResults(response.data);
    setLoaded(true);
   } 
   function handleImageResponse(response) {
    setPhotos(response.data.photos);
   }
    function searchWords(event) {

    let apiKey = "57b13ef26a049644t26b08bo9241280d"
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
    }
    function handleSearch(event) {
        setKeyword(event.target.value);
    }
    function loading() {
        searchWords();
}
    function handleForm(event) {
        event.preventDefault();
        searchWords();
    }
    if (loaded) {

    return (
        <div className="Dictionary">
            <div className="container">
            
                <h1>What word do you want to look up?</h1>
                <div className="row">
                    <div className="col-sm-4 searchSection">
            <form onSubmit={handleForm}>
                <input type="search" onChange={handleSearch}
                className="searchInput" />
                    suggested words: sunset, wine, yoga, plant...
                
                    </form>
                    </div>
                    <div className="col-sm-8">
                <Results results={results} />
                <Photos photos={photos} />
                </div>
                </div>
                </div>
                </div>
    );
    } else {
        loading();
        return "Loading...";
    }
}