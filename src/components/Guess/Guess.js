import { range } from "../../utils";
import React from "react";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((_, index) => (
        <Cell
          key={index}
          letter={result?.[index].letter}
          status={result?.[index].status}
        />
      ))}
    </p>
  );
}

export default Guess;
