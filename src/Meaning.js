import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <strong>Definition</strong>
              {definition.definition}
            </div>
            <Synonyms synonyms={definition.synonyms} />
            <p>
              <em>
                <strong>Example</strong>
                {definition.example}
              </em>
            </p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
