import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
    console.log(props.results);

    if (props.results) {
    return (<div className="Results">
        <section>
        <h3>{props.results.word}</h3>

    <Phonetic phonetic={props.results.phonetic} />
    </section>
    {props.results.meanings.map(function (meaning, index) {
        return (
            <div key={index}>
            <Meaning meaning={meaning} />
            </div>
        );
    })}
    </div>
    );
} else {
    return null;
}
}