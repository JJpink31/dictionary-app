import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faMicrophoneLines}
          size="2xl"
          style={{ color: "#fffdf6" }}
        />
      </a>{" "}
      <span className="phoneticText">{props.phonetic.text}</span>
    </div>
  );
}
