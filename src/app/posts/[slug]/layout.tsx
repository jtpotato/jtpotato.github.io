import PostProgressIndicator from "@/lib/posts/PostProgressIndicator";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mb-6"></div>
      <div className=" bg-secondary w-screen fixed top-0 left-0">
        <div className="flex items-center p-4">
          <Link href="/posts">
            <div className="flex flex-row space-x-4">
              <ArrowLeft />
              <p>More Posts</p>
            </div>
          </Link>
        </div>
        <PostProgressIndicator />
      </div>
      {children}
    </>
  );
}

export default PostLayout;
