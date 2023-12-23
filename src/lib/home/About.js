import universal from "./universal.module.css";
import styles from "./about.module.css";

function About() {
  return (
    <>
      <div className={universal.textsection}>
        <p className={styles.abouttext}>
          I&apos;m a high school student, developer and a content creator
          based in Melbourne, Australia.
        </p>
        <p className={styles.abouttext}>
          My programming journey started in 2015 with a 3 day gamedev program.
          Nearly 10 years later, I&apos;m still working on projects that interest me
          - some big, some small, and some much more impactful than others.
        </p>
        <p className={styles.abouttext}>
          Creating personal projects, as well as participating in competition
          teams has allowed me to build familiarity with many technologies in
          various areas of software engineering, such as the web, mobile, mixed
          reality and artificial intelligence 🤓
        </p>
        <p className={styles.abouttext}>
          This site includes a non-comprehensive list of projects. Keep scrolling 😊
        </p>
      </div>
    </>
  );
}

export default About;
