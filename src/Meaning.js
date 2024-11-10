import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    console.log(props.meaning.definition);
    return (
        <section>
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
    </section>
        );
    }