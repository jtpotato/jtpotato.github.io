import Post from "@/lib/posts/TPost";
import Description from "./Description";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PostReadPercentage from "@/lib/posts/PostReadPercentage";

type PostPreviewProps = {
  post: Post;
};

function PostPreview({ post }: PostPreviewProps) {
  return (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <div className="border border-lines p-4">
          <p className="font-bold text-3xl">{post.title}</p>
          <p className="">{post.published.toDateString()}</p>
        </div>

        <div className="flex items-stretch border-b border-l border-r border-lines">
          <div className="border-r p-4 border-lines">
            <div className="flex items-center">
              <p>Read Now</p>
              <ArrowUpRight />
            </div>
          </div>
          <div className="p-4 text-text-secondary">
            <PostReadPercentage slug={post.slug} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostPreview;
