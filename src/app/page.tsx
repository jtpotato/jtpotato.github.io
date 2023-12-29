import "./page.css"
import NameCard from "@/lib/home/NameCard";
import About from "@/lib/home/About";
import Projects from "@/lib/home/projects/Projects";

export default function Home() {
  return (
    <>
      <main>
        <NameCard />
        <About />
        <Projects />
      </main>
    </>
  );
}
