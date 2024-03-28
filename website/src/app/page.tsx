import Highlight from "./Highlight";

export default function Home() {

  return (
    <div className="flex items-center justify-center h-screen">
      <main className="max-w-4xl m-auto flex flex-col gap-4 p-4">
        <h1 className="text-6xl animate-fadein-down">Hi, I'm Joel</h1>
        <p className="animate-fadein-down [--fadein-delay:500ms]">
          I'm a high school student, developer and a content creator based in
          Melbourne, Australia.
        </p>
        <p className="animate-fadein-down [--fadein-delay:1000ms]">
          My programming journey started in 2015 with a 3 day gamedev program.
          Nearly 10 years later, I'm somehow still at it.
        </p>
        <br />
        <h2 className="text-2xl animate-fadein-up [--fadein-delay:1200ms]">Highlights</h2>
        <div className="flex gap-4">
          <Highlight repoURL="https://github.com/jtpotato/autocut" className="animate-fadein-up [--fadein-delay:1300ms]" />
          <Highlight repoURL="https://github.com/jtpotato/firetrace" className="animate-fadein-up [--fadein-delay:1400ms]" />
          <Highlight repoURL="https://github.com/jtpotato/project-cards" className="animate-fadein-up [--fadein-delay:1500ms]" />
        </div>
      </main>
    </div>
  );
}
