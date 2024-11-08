import React from "react";
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

    {props.meaning.example}
    <br />
    <Synonyms synonyms={props.meaning.synonyms} />
            
</p>
    </div>
    </div>
        );
    }