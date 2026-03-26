import React from "react";

function ResultBanner({ gameResult, attempts, answer }) {
  const type = gameResult === "won" ? "happy" : "sad";

  return (
    <div className={`banner ${type}`}>
      <p>
        {gameResult === "won" ? (
          <>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{attempts} guesses</strong>.
          </>
        ) : (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </>
        )}
      </p>
    </div>
  );
}

export default ResultBanner;
