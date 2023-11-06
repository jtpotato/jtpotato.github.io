import GetPostFromSlug from "@/lib/posts/PostFromSlug";
import RemoteMdxPage from "./MDXRemote";
import GetPosts from "@/lib/posts/Posts";
import "./markdown_styles.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = GetPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = GetPostFromSlug(params.slug);

  const metadata: Metadata = {
    title: post?.title + " | jtpotato",
    openGraph: {
      type: "article",
      title: post?.title + " | jtpotato",
      publishedTime: post?.published.toISOString(),
      modifiedTime: post?.edited.toISOString(),
      description: post?.content.slice(0, 50) + "...",
      siteName: "jtpotato",
      locale: "en_AU"
    },
  }
  return metadata;
}

function PostPage({ params }: { params: { slug: string } }) {
  const post = GetPostFromSlug(params.slug);
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-2xl w-full">
          <div className="mb-8">
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold my-4">{post?.title}</h1>
          <div className="p-4 border-gray-500 border-y my-4">
            <p className="m-0 font-mono">Published: {post?.published.toDateString()}</p>
            <p className="m-0 font-mono">Edited: {post?.edited.toDateString()}</p>
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
