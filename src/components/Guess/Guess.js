import { range } from "../../utils";
import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const info = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((_, index) => {
        const className = value ? `cell ${info[index].status}` : "cell";

        return (
          <span className={className} key={index}>
            {info?.[index].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
