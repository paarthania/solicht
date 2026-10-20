import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { projects } from "../content/projects";
import "../styles/Shared.css";

const INTERVAL_MS = 6000;

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setActive((index) => (index + 1) % projects.length),
      INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [cycle]);

  const select = (index) => {
    setActive(index);
    setCycle((value) => value + 1);
  };

  return (
    <Reveal className="testimonial">
      <div className="quote-mark" aria-hidden="true">
        “
      </div>
      <div>
        <div className="quotes">
          {projects.map(({ customer, location, quote, shortQuote }, index) => (
            <figure
              key={customer}
              className={`quote${index === active ? " is-active" : ""}`}
              aria-hidden={index !== active}
            >
              <blockquote>{shortQuote ?? quote}</blockquote>
              <figcaption>
                <b>{customer}</b> · {location}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="dots">
          {projects.map(({ customer }, index) => (
            <button
              key={customer}
              type="button"
              className={index === active ? "is-active" : ""}
              aria-label={`Kundenstimme ${index + 1}`}
              aria-pressed={index === active}
              onClick={() => select(index)}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default Testimonials;
