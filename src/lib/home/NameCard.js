import styles from "./NameCard.module.css";

function NameCard() {
  return (
    <>
      <div className={styles.parent}>
        <h1 className={styles.name}>I'm Joel</h1>
      </div>
    </>
  );
}

export default NameCard;
