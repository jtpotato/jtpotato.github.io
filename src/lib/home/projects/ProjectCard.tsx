"use client";

import { useEffect, useRef, useState } from "react";
import universal from "../universal.module.css";
import styles from "./projects.module.css";
import Link from "next/link";

function ProjectCard(props) {
  const [isOnRight, setIsOnRight] = useState(false);
  const projectCardRef = useRef(null);

  useEffect(() => {
    function determineCardPosition() {
      const viewportWidth = document.body.clientWidth;
      if (viewportWidth < 800) return;

      if (
        projectCardRef.current.getBoundingClientRect().left >=
        (viewportWidth / 2) - 10 // idk
      ) {
        setIsOnRight(true);
        return;
      }
      setIsOnRight(false);
    }

    determineCardPosition()

    window.addEventListener("resize", determineCardPosition);

    return () => window.removeEventListener("resize", determineCardPosition)
  }, []);

  return (
    <>
      <div className={styles.projectcard + " flex flex-col gap-2"} ref={projectCardRef} style={isOnRight ? { "--projectcard-inset": "-30% 30%" } as React.CSSProperties : { "--projectcard-inset": "0%" } as React.CSSProperties}>
        <h4>{props.project.title}</h4>
        <p>{props.project.year}</p>
        <p>{props.project.description}</p>
        <div className="my-2">
          {
            props.project.link ? <Link href={props.project.link} target="_blank" className="p-1 px-2 bg-neutral-800 w-fit rounded-md">Link 🔗</Link> : <></>
          }
        </div>

        <div className={styles.taglist}>
          {props.project.tags.map((tag) => (
            <>
              <span className={universal.filledchip}>{tag}</span>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
