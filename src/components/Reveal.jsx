import { useEffect, useRef, useState } from "react";

const Reveal = ({
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? " is-visible" : ""} ${className}`.trim()}
      style={{ "--i": delay, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
