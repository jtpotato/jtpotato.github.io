import Post from "@/lib/TPost";
import Description from "./Description";

type PostPreviewProps = {
    post: Post;
}

function PostPreview({post}: PostPreviewProps) {
    return (
        <div className="p-4 border border-amber-100/20 bg-white/5">
            <p className="font-bold">{post.title}</p>
            <p className="text-xs text-gray-500">{post.published}</p>
            <Description>{post.content}</Description>
        </div>
    );
}

export default PostPreview;