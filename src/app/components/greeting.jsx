'use client'
import { useState, useEffect } from "react";

export default function Greeting() {
  const spans = [
    { letter: "H" },
    { letter: "E" },
    { letter: "L", className: "color-rose" },
    { letter: "L" },
    { letter: "O" },
  ];

  const [renderedSpans, setRenderedSpans] = useState([]);

  useEffect(() => {
    let timeoutId;
    const renderSpans = () => {
      for (let i = 0; i < spans.length; i++) {
        timeoutId = setTimeout(() => {
          setRenderedSpans((prevRenderedSpans) => [
            ...prevRenderedSpans,
            <span
              key={i}
              className={spans[i].className}
            >
              {spans[i].letter}
            </span>,
          ]);
        }, 200 * i);
      }
    };
    renderSpans();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div id="greeting-component">{renderedSpans}</div>
    </>
  );
}
