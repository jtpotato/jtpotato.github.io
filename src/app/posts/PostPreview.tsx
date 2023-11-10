import Post from "@/lib/posts/TPost";
import Description from "./Description";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PostReadPercentage from "@/lib/posts/PostReadPercentage";

type PostPreviewProps = {
  post: Post;
};

function PostPreview({ post }: PostPreviewProps) {
  return (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <div className="border border-black/50 p-4">
          <p className="font-bold text-3xl">{post.title}</p>
          <p className="">{post.published.toDateString()}</p>
        </div>

        <div className="flex items-stretch border-b border-l border-r border-black/50">
          <div className="flex items-center space-x-4 border-r p-4 border-black/50">
            <p>Read Now</p>
            <ArrowRight />
          </div>
          <div className="p-4 text-text/70">
            <PostReadPercentage slug={post.slug} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostPreview;
