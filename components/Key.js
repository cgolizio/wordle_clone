import React, { useContext } from "react";

import { AppContext } from "../pages";

const Key = ({ styles, keyVal, bigKey }) => {
  const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
      className={styles.key}
      id={bigKey && styles.big}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
};

export default Key;
