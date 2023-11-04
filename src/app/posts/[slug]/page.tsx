import GetPostFromSlug from "@/lib/PostFromSlug";
import RemoteMdxPage from "./MDXRemote";
import GetPosts from "@/lib/Posts";
import "./markdown_styles.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = GetPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function PostPage({ params }: { params: { slug: string } }) {
  const post = GetPostFromSlug(params.slug);
  return (
    <>
      <div className="flex justify-center p-4">
        <div className="max-w-2xl w-full p-4">
          <div className="mb-2">
            <Link href={"/posts"}>
              <div className="underline flex space-x-4 text-text/50">
                <p>See other posts</p>
              </div>
            </Link>
          </div>

          <h1 className="text-6xl font-bold mb-4">{post?.title}</h1>
          <div className="p-4 border-gray-500 border-y">
            <p className="m-0 font-mono">Published: {post?.published}</p>
            <p className="m-0 font-mono">Edited: {post?.edited}</p>
          </div>

          <div className="md">
            <RemoteMdxPage contents={post!.content} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
