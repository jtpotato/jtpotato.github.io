"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import "./ClickSwitch.css"

type ClickSwitchProps = {
  a: ReactNode;
  b: ReactNode;
};

function ClickSwitch(props: React.PropsWithChildren<ClickSwitchProps>) {
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
          props.a
        ) : (
          props.b
        )}
      </button>
    </>
  );
}

export default ClickSwitch;
