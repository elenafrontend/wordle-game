import { range } from "../../utils";
import React from "react";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((_, index) => (
        <span className="cell" key={index}>
          {word?.[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
