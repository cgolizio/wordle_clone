import { createContext, useState, useEffect } from "react";
import axios from "axios";

import styles from "../styles/Home.module.css";
import GameBoard from "../components/GameBoard";
import Keyboard from "../components/Keyboard";
import { boardDefault } from "../helpers";

export const AppContext = createContext();

export default function Home() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  const correctWord = "RIGHT";

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPos: currAttempt.letterPos + 1,
    });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPos: currAttempt.letterPos - 1,
    });
  };

  return (
    <div className={styles.App}>
      <nav>
        <h1>Wordle.</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onEnter,
          onDelete,
          correctWord,
        }}
      >
        <div className={styles.game}>
          <GameBoard styles={styles} />
          <Keyboard styles={styles} />
        </div>
      </AppContext.Provider>
    </div>
  );
}
