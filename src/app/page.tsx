import FancyBackground from "@/lib/homepage/FancyBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold">Hi, I&apos;m Joel</h1>
          <div className="h-32"></div>
          <div className="border border-black/50 p-4 px-8">
          <Link href="/posts">Posts</Link>
          </div>

        </div>
      </div>
    </main>
  );
}
