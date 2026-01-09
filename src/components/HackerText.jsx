import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function HackerText({
  words = [],
  interval = 5000,
  transitionDuration = 1000,
}) {
  const [display, setDisplay] = useState(words[0] || "");

  const wordIndex = useRef(0);
  const raf = useRef(null);
  const startTime = useRef(0);

  const currentWord = useRef(words[0] || ""); // parola STABILE
  const nextWord = useRef("");

  const slots = useRef([]);

  const initSlots = (from, to) => {
    const max = Math.max(from.length, to.length);
    slots.current = Array.from({ length: max }).map((_, i) => ({
      from: from[i] || "",
      to: to[i] || "",
      char: from[i] || "",
      done: false,
    }));
  };

  const animate = (time) => {
    if (!startTime.current) startTime.current = time;

    const progress = Math.min(
      (time - startTime.current) / transitionDuration,
      1
    );

    const revealCount = Math.floor(progress * slots.current.length);

    slots.current.forEach((slot, i) => {
      if (i < revealCount) {
        slot.char = slot.to;
        slot.done = true;
      } else if (!slot.done) {
        slot.char = CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    });

    setDisplay(slots.current.map((s) => s.char).join(""));

    if (progress < 1) {
      raf.current = requestAnimationFrame(animate);
    } else {
      // fine: parola nuova diventa quella stabile
      currentWord.current = nextWord.current;
      setDisplay(currentWord.current);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      wordIndex.current = (wordIndex.current + 1) % words.length;

      nextWord.current = words[wordIndex.current];

      initSlots(currentWord.current, nextWord.current);
      startTime.current = 0;

      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(animate);
    }, interval);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(raf.current);
    };
  }, [words, interval, transitionDuration]);

  return (
    <span
    style={{
        //fontFamily: "monospace",
        letterSpacing: "0.12em",
        display: "inline-block",
        textAlign: "left",
        whiteSpace: "pre",
        scale: 1.5,
    }}
    >
      {display}
    </span>
  );
}
