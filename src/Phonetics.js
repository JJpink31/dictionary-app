import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="blank" rel="noreferrer">
        Listen
      </a>
      {""}
      <span className="phoneticText">{props.phonetic.text}</span>
    </div>
  );
}
