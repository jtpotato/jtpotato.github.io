"use client"

import { PropsWithChildren, useEffect, useRef, useState } from "react";

type FancyTextBackgroundProps = {
  spheres: number;
};

function getRandomCoords() {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  return [x, y];
}

function Sphere() {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");

  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCoordinates(getRandomCoords());

    setSize(Math.random() * 80);

    const colors = ["bg-orange-300", "bg-orange-400"];
    setColor(colors[Math.floor(Math.random() * colors.length)]);

    const startEndPos = getRandomCoords();
    const numberofPositions = 20;
    const randomPositions = [];
    for (let i = 0; i < numberofPositions; i++) {
      const pos = getRandomCoords();
      randomPositions.push(pos);
    }
    const positions = [startEndPos, ...randomPositions, startEndPos];

    const sphere = sphereRef.current;
    const steps = positions.length;
    if (sphere) {
      let keyframes: Keyframe[] = [];
      positions.forEach((position, i) => {
        let keyframe = {
          top: `${position[1]}%`,
          left: `${position[0]}%`,
          easing: "cubic-bezier(0.5, 0.1, 0.1, 0.5)",
          transform: `scale(${1.5 - Math.random()})`,
        };
        keyframes.push(keyframe);
      });

      sphere.animate(keyframes, { duration: 800000, iterations: Infinity });
    }
  }, []);

  return (
    <>
      <div
        style={{
          left: `${coordinates[0]}%`,
          top: `${coordinates[1]}%`,
          width: `${size}%`,
        }}
        className={`aspect-square absolute rounded-full ${color}`}
        ref={sphereRef}
      ></div>
    </>
  );
}

function FancyTextBackground(
  props: PropsWithChildren<FancyTextBackgroundProps>
) {
  return (
    <>
      <div className="overflow-hidden h-full w-full relative blur-lg">
        {Array.from(Array(props.spheres).keys()).map((_, i) => (
          <Sphere key={i} />
        ))}
      </div>
    </>
  );
}

export default FancyTextBackground;
