import Post from "@/lib/TPost";
import Description from "./Description";
import Link from "next/link";

type PostPreviewProps = {
  post: Post;
};

function PostPreview({ post }: PostPreviewProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="p-4 border border-amber-100/20 bg-neutral-900">
        <p className="font-bold">{post.title}</p>
        <p className="text-xs text-gray-500">{post.published}</p>
        <Description>{post.content}</Description>
      </div>
    </Link>
  );
}

export default PostPreview;
