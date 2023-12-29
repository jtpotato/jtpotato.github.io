import { Metadata } from "next";
import ProjectCardMaker from "./ProjectCardMaker";
import "./project-cards.css";
import styles from "./project-cards.module.css"

export const metadata = {
  title: "Project Cards | Pretty project cards for GitHub",
  description: "Service that automagically generates pretty project cards.",
  openGraph: {
    title: "Project Cards | Pretty project cards for GitHub",
    description: "Service that automagically generates pretty project cards.",
    siteName: "Project Cards",
  },
};

function ProjectCards() {
  return (
    <>
      <div className={styles.projectCardsParent}>
        <div>
          <div>
            <h1>Project Cards ✨</h1>
          </div>
          <div>
            <div>
              <p>They look a bit like this.</p>
              <img src="https://project-cards.jtpotatodev.workers.dev/?project=jtpotato/project-cards&started=2%20Dec%202023&codename=Alexandra" alt="An example of a project card."></img>
            </div>
            <div>
              <h5>Make your own: </h5>
              <ProjectCardMaker />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
