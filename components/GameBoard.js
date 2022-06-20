import React from "react";

import Letter from "./Letter";

const GameBoard = ({ styles }) => {
  return (
    <div className={styles.board}>
      <div className={styles.row}>
        <Letter styles={styles} letterPos={0} attemptVal={0} />
        <Letter styles={styles} letterPos={1} attemptVal={0} />
        <Letter styles={styles} letterPos={2} attemptVal={0} />
        <Letter styles={styles} letterPos={3} attemptVal={0} />
        <Letter styles={styles} letterPos={4} attemptVal={0} />
      </div>
      <div className={styles.row}>
        <Letter styles={styles} letterPos={0} attemptVal={1} />
        <Letter styles={styles} letterPos={1} attemptVal={1} />
        <Letter styles={styles} letterPos={2} attemptVal={1} />
        <Letter styles={styles} letterPos={3} attemptVal={1} />
        <Letter styles={styles} letterPos={4} attemptVal={1} />
      </div>
      <div className={styles.row}>
        <Letter styles={styles} letterPos={0} attemptVal={2} />
        <Letter styles={styles} letterPos={1} attemptVal={2} />
        <Letter styles={styles} letterPos={2} attemptVal={2} />
        <Letter styles={styles} letterPos={3} attemptVal={2} />
        <Letter styles={styles} letterPos={4} attemptVal={2} />
      </div>
      <div className={styles.row}>
        <Letter styles={styles} letterPos={0} attemptVal={3} />
        <Letter styles={styles} letterPos={1} attemptVal={3} />
        <Letter styles={styles} letterPos={2} attemptVal={3} />
        <Letter styles={styles} letterPos={3} attemptVal={3} />
        <Letter styles={styles} letterPos={4} attemptVal={3} />
      </div>
      <div className={styles.row}>
        <Letter styles={styles} letterPos={0} attemptVal={4} />
        <Letter styles={styles} letterPos={1} attemptVal={4} />
        <Letter styles={styles} letterPos={2} attemptVal={4} />
        <Letter styles={styles} letterPos={3} attemptVal={4} />
        <Letter styles={styles} letterPos={4} attemptVal={4} />
      </div>
      <div className={styles.row}>
        <Letter styles={styles} letterPos={0} attemptVal={5} />
        <Letter styles={styles} letterPos={1} attemptVal={5} />
        <Letter styles={styles} letterPos={2} attemptVal={5} />
        <Letter styles={styles} letterPos={3} attemptVal={5} />
        <Letter styles={styles} letterPos={4} attemptVal={5} />
      </div>
    </div>
  );
};

export default GameBoard;
