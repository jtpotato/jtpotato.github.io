"use client";

import { useEffect, useRef, useState } from "react";
import "./GlitchyTextOnScroll.css";

function GlitchyTextOnScroll() {
  const glitchTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate a really long string of random alphanumeric characters.
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const randomChar = () =>
      chars[Math.floor(Math.random() * (chars.length - 1))];
    const randomString = (length: number) =>
      Array.from(Array(length)).map(randomChar).join("");
    if (glitchTextRef.current == null) return;
    glitchTextRef.current.innerText = randomString(8000);
  }, []);

  return (
    <>
      <div
        className="boba-glitchy-text-on-scroll font-mono"
        ref={glitchTextRef}
      ></div>
    </>
  );
}

export default GlitchyTextOnScroll;
