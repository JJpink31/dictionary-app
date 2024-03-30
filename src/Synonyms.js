import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <strong>Synonyms:</strong>
        <ul className="Synonyms">
          {props.synonyms.slice(0, 5).map(function (synonyms, index) {
            return (
              <li
                className="me-3 mb-3 mt-2
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
