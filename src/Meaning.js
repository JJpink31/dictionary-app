import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.slice(0, 2).map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <strong>Definition</strong>
              {definition.definition}
            </div>
            <div className="example">
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
