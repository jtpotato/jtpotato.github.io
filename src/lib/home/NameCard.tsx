import styles from "./NameCard.module.css";
import universal from "./universal.module.css"

function NameCard() {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.background}>
        </div>
        <div>
          <h1 className={styles.name + " font-bold"}>I&apos;m Joel</h1>
          <div className={styles.aboutchips}>
            <span className={universal.chip}>Student</span>
            <span className={universal.chip}>Developer</span>
            <span className={universal.chip}>Melbourne &#xB7; AU</span>
          </div>
        </div>
        <span className={styles.scrollDownIndicator}>
          Scroll Down
        </span>
      </div>
    </>
  );
}

export default NameCard;
