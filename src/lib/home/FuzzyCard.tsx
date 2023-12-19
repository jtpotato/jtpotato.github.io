import { HTMLProps } from "react";
import styles from "./glass.module.css"

function FuzzyCard(props: HTMLProps<HTMLDivElement>) {
  return (<>
    <div className={styles.glassmain}>
      { props.children }
    </div>
  </>);
}

export default FuzzyCard;