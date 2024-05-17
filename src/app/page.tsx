import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
        <h2 className="font-bold">Links</h2>
        <div className="flex h-6 gap-4">
          <a href="https://github.com/jtpotato>">GitHub</a>
          <Separator orientation="vertical" />
          <a href="https://www.threads.net/@jtpotato_">Threads</a>
          <Separator orientation="vertical" />
          <a href="https://www.youtube.com/@jtpotato">YouTube</a>
        </div>
      </main>
    </div>
  );
}
