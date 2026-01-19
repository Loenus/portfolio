import { useEffect, useState } from "react";

export default function BreakableText({ children, breakpoint = 500 }) {
  const [content, setContent] = useState(children);

  useEffect(() => {
    const handleResize = () => {
      const text = getTextFromChildren(children);
      if (!text) return;

      if (window.innerWidth < breakpoint) {
        const words = text.split(" ").filter(word => word.trim() !== "");
        if (words.length >= 4) {
          const newContent = (
            <>
              {words.slice(0, 3).join(" ")}<br />
              {words.slice(3).join(" ")}
            </>
          );
          setContent(newContent);
        }
      } else {
        setContent(text);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [children, breakpoint]);

  return <span>{content}</span>;
}


function getTextFromChildren(children) {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) {
    return children
      .map(child => (typeof child === "string" ? child : ""))
      .join(" ");
  }
  return "";
}

