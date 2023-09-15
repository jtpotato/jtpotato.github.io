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
      return Array.from(Array(length)).map(randomChar).join("");
    };
    if (glitchTextRef.current == null) return;

    glitchTextRef.current.innerText = randomString(100).repeat(80);

    let hasScrolled = false;

    window.addEventListener("scroll", () => (hasScrolled = true));

    function onMouseMove(e: MouseEvent) {
      if (!glitchTextRef.current) return;
      const rect = glitchTextRef.current.getBoundingClientRect();
      glitchTextRef.current.style.setProperty(
        "--mouse-x",
        e.clientX - rect.left + "px"
      );
      glitchTextRef.current.style.setProperty(
        "--mouse-y",
        e.clientY - rect.top + "px"
      );
    }

    // get the radial gradient effect
    window.addEventListener("mousemove", onMouseMove);

    glitchTextRef.current.style.setProperty("--mouse-x", 1000000 + "px");
    glitchTextRef.current.style.setProperty("--mouse-y", 1000000 + "px");

    return () => {
      window.removeEventListener("scroll", () => (hasScrolled = true));
      window.removeEventListener("mousemove", onMouseMove);
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
