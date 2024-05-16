import RepoHighlight from "../lib/components/RepoHighlight";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <main className="m-auto flex max-w-4xl flex-col gap-4 p-4 md:py-32">
        <h1 className="text-6xl">Hi, I'm Joel</h1>
        <p>
          I'm a high school student, developer and a content creator based in
          Melbourne, Australia.
        </p>
        <p>Playing with computer things since 2015.</p>
        <br />
        <h2 className="text-lg font-bold">Highlights</h2>
        <div className="flex gap-4">
          <RepoHighlight repoURL="https://github.com/jtpotato/autocut" />
          <RepoHighlight repoURL="https://github.com/jtpotato/firetrace" />
          <RepoHighlight repoURL="https://github.com/jtpotato/project-cards" />
        </div>
      </main>
    </div>
  );
}
