"use client";

import { useEffect } from "react";

function MouseToCss() {
  useEffect(() => {
    document.body.style.setProperty("--mouse-x", 0 + "px");
    document.body.style.setProperty("--mouse-y", 0 + "px");
    
    window.onmousemove = (e) => {
      // get the mouse position relative to top left corner
      const x = e.clientX;
      const y = e.clientY;

      // set the mouse position
      document.body.style.setProperty("--mouse-x", x + "px");
      document.body.style.setProperty("--mouse-y", y + "px");
    };
  }, []);
  return <></>;
}

export default MouseToCss;
