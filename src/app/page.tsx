import "./page.css"
import NameCard from "@/lib/home/NameCard";
import About from "@/lib/home/About";
import Projects from "@/lib/home/projects/Projects";
import Socials from "./Socials";

export default function Home() {
  return (
    <>
      <main>
        <NameCard />
        <About />
        <Socials />
        <Projects />
      </main>
    </>
  );
}
