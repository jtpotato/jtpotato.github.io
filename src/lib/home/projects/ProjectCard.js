import universal from "../universal.module.css";
import styles from "./projects.module.css";

/**
 * @typedef {{ year, title, description, tags }: {year: string, title: string, description: string, tags: string}} ProjectType
 */

/**
 *
 * @param {{project}: {project: ProjectType}} props
 * @returns
 */
function ProjectCard(props) {
  return (
    <div className={styles.projectcard}>
      <h4>{props.project.title}</h4>
      <p>{props.project.year}</p>
      <p>{props.project.description}</p>
      <div className={styles.taglist}>
        {props.project.tags.map((tag) => (
          <>
            <span className={universal.chip}>{tag}</span>
          </>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
