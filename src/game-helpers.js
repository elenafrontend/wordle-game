/**
 * Compares a guess against the answer and returns letter-by-letter status.
 * Uses frequency map for O(n) complexity with correct duplicate handling.
 *
 * @param {string} guess - 5-letter uppercase word
 * @param {string} answer - 5-letter uppercase target word
 * @returns {Array<{letter: string, status: 'correct'|'misplaced'|'incorrect'}>|null}
 *
 * @example
 * checkGuess('WHALE', 'WATER')
 * // Returns:
 * // [
 * //   { letter: 'W', status: 'correct' },
 * //   { letter: 'H', status: 'incorrect' },
 * //   { letter: 'A', status: 'correct' },
 * //   { letter: 'L', status: 'incorrect' },
 * //   { letter: 'E', status: 'misplaced' },
 * // ]
 */
export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const result = [];
  const letterCount = {};

  for (const letter of answer) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  // Pass 1: find exact matches
  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i];
    if (letter !== answer[i]) {
      continue;
    }
    letterCount[letter]--;
    result[i] = { letter, status: "correct" };
  }

  // Pass 2: find misplaced or mark incorrect
  for (let i = 0; i < guess.length; i++) {
    if (result[i]) {
      continue;
    }
    const letter = guess[i];
    const status = letterCount[letter] > 0 ? "misplaced" : "incorrect";
    if (status === "misplaced") {
      letterCount[letter]--;
    }
    result[i] = { letter, status };
  }

  return result;
}
