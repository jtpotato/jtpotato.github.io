import dynamic from "next/dynamic";
import Hero from "./Hero";
import Media from "./Media";

const Background = dynamic(() => import("../components/Background"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Background />
      <main className="p-4 md:pl-16">
        <Hero />
        <Media />
      </main>
    </>
  );
}
