import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import ResultBanner from "../ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameResult, setGameResult] = React.useState(null);

  function handleSubmitGuess(guess) {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);

    if (guess.toUpperCase() === answer) {
      setGameResult("won");
    } else if (nextGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameResult("lose");
    }
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput
        handleAddGuess={handleSubmitGuess}
        disabled={Boolean(gameResult)}
      />
      {gameResult && (
        <ResultBanner
          gameResult={gameResult}
          attempts={guessList.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
