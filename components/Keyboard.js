import React, { useContext, useCallback, useEffect } from "react";

import { AppContext } from "../pages";
import Key from "./Key";

const Keyboard = ({ styles }) => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });

      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });

      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className={styles.keyboard} onKeyDown={handleKeyboard}>
      <div className={styles.line1}>
        {keys1.map((key, i) => (
          <Key key={i} styles={styles} keyVal={key} />
        ))}
      </div>
      <div className={styles.line2}>
        {keys2.map((key, i) => (
          <Key key={i} styles={styles} keyVal={key} />
        ))}
      </div>
      <div className={styles.line3}>
        <Key styles={styles} keyVal='ENTER' bigKey />
        {keys3.map((key, i) => (
          <Key key={i} styles={styles} keyVal={key} />
        ))}
        <Key styles={styles} keyVal='DELETE' bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
