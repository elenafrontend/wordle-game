import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {/* use index because list is static */}
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess className="guess" key={index} word={guessList[index]} />
      ))}
    </div>
  );
}

export default GuessResults;
