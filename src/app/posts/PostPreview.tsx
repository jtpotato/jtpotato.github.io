import Post from "@/lib/posts/TPost";
import Description from "./Description";
import Link from "next/link";

type PostPreviewProps = {
  post: Post;
};

function PostPreview({ post }: PostPreviewProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="py-4">
        <p className="font-bold text-accent">{post.title}</p>
        <p className="">{post.published.toDateString()}</p>
        <Description>{post.content}</Description>
      </div>
    </Link>
  );
}

export default PostPreview;
