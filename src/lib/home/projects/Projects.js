import styles from "./projects.module.css";
import universal from "../universal.module.css";
import projectslist from "./projectslist.json";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <div className={styles.projectsparent}>
        <div className={styles.projectspin}>
          <h2>Projects</h2>
          <div className={styles.projectslist}>
            {projectslist.map((project) => {
              return <ProjectCard project={project} />;
            })}
            <h2 style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>{"</end projects>"}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
