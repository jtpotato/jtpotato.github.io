import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl">Hi, I&apos;m Joel</h1>
          <div className="h-32"></div>
          <Link href="/posts">Posts</Link>
        </div>
      </div>
    </main>
  );
}
