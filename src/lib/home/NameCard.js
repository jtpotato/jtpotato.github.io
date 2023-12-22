import styles from "./NameCard.module.css";

function NameCard() {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.background}>
          <span className={styles.aurora1}></span>
          <span className={styles.aurora2}></span>
          <span className={styles.aurora3}></span>
        </div>
        <h1 className={styles.name}>I'm Joel</h1>
      </div>
    </>
  );
}

export default NameCard;
