import React from "react";

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
            
</p>
    </div>
    </div>
        );
    }