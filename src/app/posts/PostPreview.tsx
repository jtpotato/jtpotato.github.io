import Post from "@/lib/posts/TPost";
import Description from "./Description";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

        <div className="flex items-center space-x-4 p-4 border-b border-l border-r border-black/50">
          <p>Read Now</p>
          <ArrowRight />
        </div>
      </Link>
    </div>
  );
}

export default PostPreview;
