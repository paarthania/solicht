import React, { useEffect, useState } from "react";
import "../styles/Headline.css";
import styled from "styled-components";

const HeadlineBody = styled.div`
  margin-right: 30px;
  color: white;
  margin-top: 4rem;
  font-family: Montserrat;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 1000px) {
    margin-right: 170px;
    margin-top: 5rem;
  }
`;
const Headline = () => {
  const STATIC_TEXT = "Wir";
  const STATIC_TEXT_1 = "PV-Anlagen und";
  const DYNAMIC_WORDS_1 = [
    "effiziente\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B",
    "energetische\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B",
    "ökologische\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B",
  ];
  const STATIC_TEXT_2 = "Sanierungen";
  const DYNAMIC_WORDS_2 = [
    "planen\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B",
    "setzen um\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B",
    "realisieren\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B",
  ];

  const [currentWordIndex1, setCurrentWordIndex1] = useState(0);
  const [typedLetters1, setTypedLetters1] = useState("");
  const [currentWordIndex2, setCurrentWordIndex2] = useState(0);
  const [typedLetters2, setTypedLetters2] = useState("");

  useEffect(() => {
    const intervalId1 = startTypingAnimation(
      DYNAMIC_WORDS_1,
      currentWordIndex1,
      setCurrentWordIndex1,
      typedLetters1,
      setTypedLetters1
    );

    const intervalId2 = startTypingAnimation(
      DYNAMIC_WORDS_2,
      currentWordIndex2,
      setCurrentWordIndex2,
      typedLetters2,
      setTypedLetters2
    );

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
    };
  }, [currentWordIndex1, currentWordIndex2, typedLetters1, typedLetters2]);

  return (
    <HeadlineBody>
      <div className="headline">
        <div className="static-text">{STATIC_TEXT}</div>
        <div className="dynamic-text">{typedLetters2}</div>
        <div className="static-text">{STATIC_TEXT_1}</div>
        <div className="dynamic-text">{typedLetters1}</div>
        <div className="static-text">{STATIC_TEXT_2}</div>
      </div>
    </HeadlineBody>
  );
};

const startTypingAnimation = (
  dynamicWords,
  currentIndex,
  setCurrentIndex,
  typedLetters,
  setTypedLetters
) => {
  return setInterval(() => {
    const word = dynamicWords[currentIndex];
    if (typedLetters === word) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
      setTypedLetters(""); // Reset typedLetters when looping back to the first word
    } else {
      setTypedLetters((prevLetters) =>
        word.substring(0, prevLetters.length + 1)
      );
    }
  }, 200);
};

export default Headline;
