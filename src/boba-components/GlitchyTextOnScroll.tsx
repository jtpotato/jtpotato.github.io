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
    const randomString = (length: number) => {
      let theRandomString = Array.from(Array(length)).map(randomChar).join("");
      // put some easter egg somewhere in the middle of that string
      theRandomString =
        theRandomString.slice(0, 2000 * Math.random() + 1000) + "boba!".repeat(80) + "honestlyiwouldnotexpectanyonetoreadthis" + theRandomString.slice(4000);
      return theRandomString;
    };
    if (glitchTextRef.current == null) return;

    glitchTextRef.current.innerText = randomString(8000);

    let hasScrolled = false;

    window.onscroll = () => (hasScrolled = true);

    const scrollChecker = setInterval(() => {
      if (!hasScrolled) return;
      if (!glitchTextRef.current) return;
      glitchTextRef.current.innerText = randomString(8000);
      hasScrolled = false;
    }, 10);

    // get the radial gradient effect
    window.onmousemove = (e) => {
      if (!glitchTextRef.current) return;
      const rect = glitchTextRef.current.getBoundingClientRect()
      glitchTextRef.current.style.setProperty("--mouse-x", e.clientX - rect.left + "px");
      glitchTextRef.current.style.setProperty("--mouse-y", e.clientY - rect.top + "px");
    }

    return () => {
      clearInterval(scrollChecker);
      window.onscroll = null;
    };
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
