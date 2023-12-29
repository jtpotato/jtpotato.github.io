"use client"

import { useState } from "react";
import styles from "./project-cards.module.css";

function ProjectCardMaker() {
  const [projectName, setProjectName] = useState("");
  const [projectCodename, setProjectCodename] = useState("");
  const [projectStarted, setProjectStarted] = useState("");

  function createURL(
    projectName: string,
    projectCodename: string,
    projectStarted: string
  ) {
    return new URL(
      `https://project-cards.jtpotatodev.workers.dev/?project=${projectName}&started=${projectStarted}&codename=${projectCodename}`
    ).toString();
  }

  return (
    <>
      <div className={styles.projectCardMaker}>
        <div className={styles.inputSection}>
          <div>
            <label className={styles.label}>Project Name</label>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setProjectName(e.currentTarget.value)}
            />
          </div>

          <div>
            <label className={styles.label}>Codename</label>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setProjectCodename(e.currentTarget.value)}
            />
          </div>

          <div>
            <label className={styles.label}>Date Started</label>
            <input
              type="date"
              placeholder="Started"
              className={styles.input}
              // convert Date to `2 Dec 2023` format
              onChange={(e) =>
                setProjectStarted(
                  new Date(e.currentTarget.value).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                )
              }
            />
          </div>
        </div>
        <div style={{ marginTop: "2em", width: "100%" }}>
          <label className={styles.label}>Project Card Link</label>
          <div className={styles.outputBox}>
            <input
              type="text"
              className={styles.input + " " + styles.outputTextField}
              value={createURL(projectName, projectCodename, projectStarted)}
            />
            <button className={styles.button} onClick={() => {
                navigator.clipboard.writeText(createURL(projectName, projectCodename, projectStarted))
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="16"
              >
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCardMaker;
