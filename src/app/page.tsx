import Highlight from "./Highlight";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <main className="m-auto flex max-w-4xl flex-col gap-4 p-4">
        <h1 className="animate-fadein-down text-6xl">Hi, I'm Joel</h1>
        <p className="animate-fadein-down [--fadein-delay:500ms]">
          I'm a high school student, developer and a content creator based in
          Melbourne, Australia.
        </p>
        <p className="animate-fadein-down [--fadein-delay:1000ms]">
          Playing with computer things since 2015.
        </p>
        <br />
        <h2 className="animate-fadein-up text-2xl [--fadein-delay:1200ms]">
          Highlights
        </h2>
        <div className="flex gap-4">
          <Highlight
            repoURL="https://github.com/jtpotato/autocut"
            className="animate-fadein-up [--fadein-delay:1300ms]"
          />
          <Highlight
            repoURL="https://github.com/jtpotato/firetrace"
            className="animate-fadein-up [--fadein-delay:1400ms]"
          />
          <Highlight
            repoURL="https://github.com/jtpotato/project-cards"
            className="animate-fadein-up [--fadein-delay:1500ms]"
          />
        </div>
      </main>
    </div>
  );
}
