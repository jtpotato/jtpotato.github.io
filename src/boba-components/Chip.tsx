"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import "./BobaGlass.css";

type ChipProps = {
  logo?: ReactNode;
  text: string;
};

function Chip(props: ChipProps) {
  const chipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // set top left coordinates css variables
    function saveMousePos(e: MouseEvent) {
      if (chipRef.current) {
        const rect = chipRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        chipRef.current.style.setProperty("--mouse-x", x + "px");
        chipRef.current.style.setProperty("--mouse-y", y + "px");
      }
    }

    window.addEventListener("mousemove", saveMousePos);
  }, []);

  return (
    <>
      <div className="boba-glass" ref={chipRef}>
        <div className="flex flex-row items-center justify-center w-fit space-x-1 px-2 py-1 whitespace-nowrap">
          {props.logo ? props.logo : <></>}
          <span className="text-sm">{props.text}</span>
        </div>
      </div>
    </>
  );
}

export default Chip;
