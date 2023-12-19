import { ReactElement, useEffect, useRef, useState } from "react";
import styles from "./ProjectsSection.module.css"

function ProjectsBackground() {
  const [columnsState, setColumnsState] = useState(10);
  const [rowsState, setRowsState] = useState(10);
  const [blackSquares, setBlackSquares] = useState<ReactElement[]>([]);

  const projectsBackgroundParent = useRef<HTMLDivElement>(null);

  const squareSize = 100;

  const createTiles = (tiles: number) => {
    let newTiles = []
    for (let i = 0; i < tiles; i++) {
      newTiles.push(
        <div className={styles.blacksquares}></div>
      )
    }

    setBlackSquares(newTiles)
  }

  const createGrid = () => {
    if (!projectsBackgroundParent.current) return;

    let columns = Math.floor(projectsBackgroundParent.current.clientWidth / squareSize)
    let rows = Math.floor(projectsBackgroundParent.current.clientHeight / squareSize)

    setColumnsState(columns);
    setRowsState(rows);

    console.log(columns, rows, columns * rows)

    createTiles(columns * rows)
  }

  useEffect(() => {
    createGrid();

    window.addEventListener("resize", createGrid);

    return () => window.removeEventListener("resize", createGrid);
  }, [])

  // gamery type stripey stuff
  return (<>
    { /* @ts-expect-error */}
    <div className={styles.projectsbackground} style={{ "--project-squares-columns": columnsState, "--project-squares-rows": rowsState }} ref={projectsBackgroundParent}>
      <div className={styles.squaresparent}>
        {blackSquares}
      </div>
    </div>
  </>);
}

export default ProjectsBackground;