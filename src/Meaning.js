import React from "react";
import Synonyms from "./Synonyms";
import "./Example.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.slice(0, 2).map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition mb-3">
              <strong>Definition:</strong> {definition.definition}
            </div>
            <div className="example mb-3">
              <em>
                <strong>Example:</strong> {definition.example}
              </em>
            </div>
            <Synonyms synonyms={props.meaning.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
