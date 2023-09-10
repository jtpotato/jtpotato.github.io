"use client";

import { useEffect, useRef, useState } from "react";
import "./ClickSwitch.css"

function ClickSwitch() {
  const [displayA, setDisplayA] = useState(true);
  const hoverSwitchRef = useRef<HTMLButtonElement>(null);

  function handleClickEvent() {
    setDisplayA(!displayA);
    hoverSwitchRef.current?.classList.remove("clickswitch_anim");
    void hoverSwitchRef.current?.offsetWidth;
    hoverSwitchRef.current?.classList.add("clickswitch_anim");
  }

  return (
    <>
      <button className="inline clickswitch" onClick={handleClickEvent} ref={hoverSwitchRef}>
        {displayA ? (
          <span className="inline">Joel</span>
        ) : (
          <span className="inline">奕諴</span>
        )}
      </button>
    </>
  );
}

export default ClickSwitch;
