"use client";

import Link from "next/link";
import TryNow from "./TryNow";
import SlideIn from "./SlideIn";
import { motion } from "framer-motion";
import FiretraceBackground from "./FiretraceBackground";
import styles from "./firetrace.module.css";

function FiretraceHomePage() {
  return (
    <>
      <div className={styles.body}>
        <FiretraceBackground />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          layout
        >
          <div className="md:h-64" />
          <img
            src="https://raw.githubusercontent.com/jtpotato/firetrace/main/assets/banner-transparent.svg"
            alt="Firetrace"
            style={{
              width: "auto",
              height: "12em",
              objectFit: "contain",
              maxWidth: "250vw",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          layout
        >
          <h1 className={`font-bold text-xl md:text-2xl text-white`}>
            Open and Accessible Bushfire Model
          </h1>
        </motion.div>
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            layout
          >
            <div className="">
              <TryNow />
              <p>
                Introducing Firetrace, an AI model designed to predict the
                severity of Australian bushfires across the entire continent.
                Leveraging the ability of deep neural networks, Firetrace
                utilizes data from satellites and weather stations to project
                the scale of future fires.
              </p>
            </div>
          </motion.div>

          <SlideIn direction="left">
            <h2 className={styles.headings}>For Everyone</h2>
            <p>
              Historically, bushfire modelling has been a complex task,
              restricted to well-equipped scientific institutions, requiring
              vast amounts of domain-specific knowledge and computational power.
              The general population has never been able to experiment with
              models themselves and generate their own insights.
              <br />
              <br />
              <strong className={styles.bold}>Until now.</strong>
              <br />
              <br />
              Firetrace has been designed from the{" "}
              <strong className={styles.bold}>ground-up</strong> specifically to
              ensure that the majority of people, without specialisation in fire
              management, are able to use this tool.
            </p>
          </SlideIn>

          <SlideIn direction="right">
            <h2 className={styles.headings}>Free. Forever.</h2>
            <p>
              We believe that any model pertaining to natural disasters and the
              safety of people, regardless of utility, should be free and open.
              <br />
              <br />
              Firetrace is currently free to use through the web interface - and
              the source code and models will forever be open source and
              avaliable to everyone to download. No waitlisting/complex
              communication process required.
            </p>
          </SlideIn>

          <SlideIn direction="left">
            <h2 className={styles.headings}>A Breakthrough in Simplicity ✨</h2>
            <p>
              As a result of our unwavering commitment to accessibility and ease
              of use, Firetrace only requires{" "}
              <strong className={styles.bold}>4 inputs</strong> to generate a
              prediction. These inputs (sometimes called &quot;parameters&quot; or
              &quot;factors&quot;) are easy to understand and conceptualise for people
              without specific education. Never before have we seen a model
              capable of generating remotely accurate<sup>1</sup> predictions
              without milliions of data points ranging over several weeks.
            </p>
          </SlideIn>

          <SlideIn direction="right">
            <h2 className={styles.headings}>Trailblazing 🔥</h2>
            <p>
              Firetrace already pushes many boundaries in simplicity and
              accessibility, but we&apos;re not stopping there. We aim to continue
              innovating and introducing new architectures that enable features
              such as map visualisations, while continuing to embrace our core
              value of simplicity.
            </p>
          </SlideIn>

          <TryNow />

          {/* Footnote */}
          <footer className="my-32">
            <p className="text-sm">
              <sup>1</sup> As accurate as Firetrace may be, it is not a magical
              fortune-telling machine 🔮, and the insights the tool provides are
              quite limited. We{" "}
              <strong className={styles.bold}>strongly</strong> discourage using
              Firetrace as a mission-critical prediction tool.
            </p>
            <br />
            <p className="text-sm">We do not take donations for Firetrace.</p>
            <br />
            <p className="text-sm">
              Made by{" "}
              <Link
                href="https://github.com/jtpotato"
                target="_blank"
                className="underline"
              >
                jtpotato
              </Link>{" "}
              and{" "}
              <Link
                href="https://github.com/small-brain-ferret"
                target="_blank"
                className="underline"
              >
                small-brain-ferret
              </Link>
              .
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default FiretraceHomePage;
