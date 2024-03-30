import React from "react";
import Synonyms from "./Synonyms";
import "./Example.css";
import Typewriter from "typewriter-effect";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.slice(0, 2).map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition mb-3">
              <strong>Definition:</strong>{" "}
              <Typewriter
                options={{
                  strings: [definition.definition],
                  autoStart: true,
                  delay: 85,
                  deleteSpeed: 1000000,
                  loop: false,
                  cursor: "",
                }}
              />
            </div>
            <div className="example mb-3">
              <em>
                <strong>Example:</strong>
                <Typewriter
                  options={{
                    strings: [definition.example],
                    autoStart: true,
                    delay: 85,
                    deleteSpeed: 1000000,
                    cursor: "",
                  }}
                />
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
