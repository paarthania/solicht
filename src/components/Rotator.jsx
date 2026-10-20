import { useEffect, useRef, useState } from "react";

const INTERVAL_MS = 2400;

const Rotator = ({ words }) => {
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState();
  const wordRefs = useRef([]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setActive((index) => (index + 1) % words.length),
      INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [words.length]);

  useEffect(() => {
    const measure = () => setWidth(wordRefs.current[active].offsetWidth);
    measure();
    document.fonts?.ready.then(measure);
  }, [active]);

  const previous = (active - 1 + words.length) % words.length;

  return (
    <span className="rotator" style={{ width }}>
      {words.map((word, index) => (
        <span
          key={word}
          ref={(element) => (wordRefs.current[index] = element)}
          className={
            index === active
              ? "is-active"
              : index === previous
                ? "is-leaving"
                : ""
          }
          aria-hidden={index !== active}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default Rotator;
