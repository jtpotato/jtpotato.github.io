import styles from "./projects.module.css";
import universal from "../universal.module.css";
import projectslist from "./projectslist.json";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <div className={styles.projectsparent}>
        <div className={styles.projectspositioner}>
          <div className={styles.projectspin}>
            <h2>Projects</h2>
            <div className={styles.projectslist}>
              {projectslist.toReversed().map((project) => {
                return <ProjectCard project={project} />;
              })}
              <h2
                style={{
                  height: "50vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gridColumn: "span 2",
                }}
              >
                {"</end projects>"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
