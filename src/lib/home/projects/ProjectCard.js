"use client";

import { useEffect, useRef, useState } from "react";
import universal from "../universal.module.css";
import styles from "./projects.module.css";

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
      <div className={styles.projectcard} ref={projectCardRef} style={isOnRight ? {"--projectcard-inset": "-30% 30%"} : {"--projectcard-inset": "0%"}}>
        <h4>{props.project.title}</h4>
        <p>{props.project.year}</p>
        <p>{props.project.description}</p>
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
