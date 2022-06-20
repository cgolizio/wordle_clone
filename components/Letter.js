import React, { useContext } from "react";
import { AppContext } from "../pages";

const Letter = ({ styles, letterPos, attemptVal }) => {
  const { board, correctWord, currAttempt } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? styles.correct : almost ? styles.almost : styles.error);

  return (
    <div className={styles.letter} id={!letterState ? "" : letterState}>
      {letter}
    </div>
  );
};

export default Letter;
