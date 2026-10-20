import { useEffect, useState } from "react";
import "../styles/Headline.css";

const VERBS = ["planen", "setzen um", "realisieren"];
const ADJECTIVES = ["effiziente", "energetische", "ökologische"];
const TYPING_DELAY_MS = 200;
const HOLD_DELAY_MS = 2000;

const useTypewriter = (words) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const word = words[wordIndex];
  const isComplete = length === word.length;

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isComplete) {
          setLength(0);
          setWordIndex((index) => (index + 1) % words.length);
        } else {
          setLength((current) => current + 1);
        }
      },
      isComplete ? HOLD_DELAY_MS : TYPING_DELAY_MS,
    );
    return () => clearTimeout(timeout);
  }, [isComplete, length, words.length]);

  return word.slice(0, length);
};

const Headline = () => {
  const verb = useTypewriter(VERBS);
  const adjective = useTypewriter(ADJECTIVES);

  return (
    <div className="headline-container">
      <div className="headline">
        <div className="static-text">Wir</div>
        <div className="dynamic-text">{verb}</div>
        <div className="static-text">PV-Anlagen und</div>
        <div className="dynamic-text">{adjective}</div>
        <div className="static-text">Sanierungen</div>
      </div>
    </div>
  );
};

export default Headline;
