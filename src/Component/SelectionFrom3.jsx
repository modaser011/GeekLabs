import React, { useState } from "react";
import styles from "../Styles/GeekLabComp2.module.css";

const SelectionFrom3 = ({ word1, word2, word3 }) => {
  const [selectedWord, setSelectedWord] = useState(word2);
  //console.log(selectedWord);
  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  return (
    <div
      className={styles.wordContainer}
      style={{ marginTop: "-3.5rem", marginBottom: "-2.8rem" }}
    >
      <p
        className={`${styles.word} ${
          selectedWord === word1 && styles.selected
        }`}
        onClick={() => handleWordClick(word1)}
        style={{ marginBottom: "-.3rem" }}
      >
        {word1}
      </p>
      <p
        className={`${styles.word} ${
          selectedWord === word2 && styles.selected
        } ${selectedWord !== word2 && styles.unselected}`}
        onClick={() => handleWordClick(word2)}
        style={{ marginBottom: "-.3rem" }}
      >
        {word2}
      </p>
      <p
        className={`${styles.word} ${
          selectedWord === word3 && styles.selected
        } ${selectedWord !== word3 && styles.unselected}`}
        onClick={() => handleWordClick(word3)}
        style={{ marginTop: "-.1rem" }}
      >
        {word3}
      </p>
    </div>
  );
};

export default SelectionFrom3;
