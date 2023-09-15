// Essentially the chip component
"use client";

import { PropsWithChildren, ReactNode, useEffect, useRef } from "react";
import "./BobaGlass.css";

type CardProps = {
  logo?: ReactNode;
  animate?: boolean;
};

function Card(props: PropsWithChildren<CardProps>) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    if (!props.animate) {
      cardRef.current.style.setProperty("--mouse-x", -1000000 + "px");
      cardRef.current.style.setProperty("--mouse-y", -1000000 + "px");
    }

    // set top left coordinates css variables
    function saveMousePos(e: MouseEvent) {
      if (props.animate) return;
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cardRef.current.style.setProperty("--mouse-x", x + "px");
        cardRef.current.style.setProperty("--mouse-y", y + "px");
      }
    }

    const animationLoop = () => {
      if (!cardRef.current) return;
      if (props.animate) {
        // given a value between 0 and 1, get a coordinate that represents a point on the side of the rectangle.
        const rect = cardRef.current.getBoundingClientRect();
        const perimeter = rect.width * 2 + rect.height * 2;
        const percent = (Date.now() % 1000) / 1000;

        const straightLength = percent * perimeter;

        let coordinates = [0, 0]

        if (straightLength < rect.width) {
          coordinates = [straightLength, 0];
        }
        else if (straightLength < rect.width + rect.height) {
          coordinates = [rect.width, -(straightLength - rect.width)];
        }

        }
      }
    

    window.addEventListener("mousemove", saveMousePos);
  }, []);

  return (
    <>
      <div
        className={`boba-glass p-4 ${
          props.animate ? "boba-glass-animate" : ""
        }`}
        ref={cardRef}
      >
        {props.logo ? props.logo : <></>}
        {props.children}
      </div>
    </>
  );
}

export default Card;
