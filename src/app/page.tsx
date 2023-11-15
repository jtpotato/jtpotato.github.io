import Background from "@/lib/background/Background";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold">Hi, I&apos;m Joel</h1>
          <div className="h-32"></div>
          <div className="flex">
            <div className="w-32 border-lines border-l border-t border-b p-4 px-8 flex justify-center">
              <Link href="/projects">Projects</Link>
            </div>
            <div className="w-32 flex justify-center border border-lines p-4 px-8">
              <Link href="/posts">Posts</Link>
            </div>
          </div>
        </div>
      </div>
      <Background />
    </main>
  );
}