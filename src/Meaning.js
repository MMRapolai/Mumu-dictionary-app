import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    console.log(props.meaning.definition);
    return (
    <div className="Meaning">

    <h4>{props.meaning.partOfSpeech}</h4>

    <div>
    <p>

    {props.meaning.definition}
    <br />
<section>
    {props.meaning.example}
    <br />
    <Synonyms synonyms={props.meaning.synonyms} />
    
</section>
</p>
    </div>
    </div>
        );
    }