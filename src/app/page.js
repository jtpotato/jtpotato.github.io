import styles from "./page.module.css"
import "./page.css"
import NameCard from "@/lib/home/NameCard";
import About from "@/lib/home/About";

export default function Home() {
  return (
    <>
      <main>
        <NameCard />
        <About />
      </main>
    </>
  );
}
