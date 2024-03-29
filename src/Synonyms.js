import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <strong>Synonyms:</strong>
        <ul className="Synonyms mb3">
          {props.synonyms.slice(0, 5).map(function (synonyms, index) {
            return (
              <li
                className="me-3 mb-3 text-center
                
              "
                key={index}
              >
                {synonyms}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
