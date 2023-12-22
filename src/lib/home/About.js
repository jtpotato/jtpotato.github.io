import universal from "./universal.module.css"

function About() {
  return (
    <>
      <div className={universal.textsection}>
        <h2>About</h2>
        <p>
          I'm a high school student (VCE 😰), developer and a content creator
          based in Melbourne, Australia.
        </p>
        <p>
          My programming journey started in 2015 with a 3 day gamedev program.
          Nearly 10 years later, I'm still coding somehow, working on more
          advanced and impactful projects than ever before.
        </p>
        <p>
          Creating personal projects has allowed me to build familiarity with
          many technologies in various areas of software engineering, such as
          the web, mobile, mixed reality and artificial intelligence 🤓
        </p>
      </div>
    </>
  );
}

export default About;
