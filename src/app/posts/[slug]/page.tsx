import GetPostFromSlug from "@/lib/PostFromSlug";
import RemoteMdxPage from "./MDXRemote";
import "./markdown_styles.css"

function PostPage({ params }: { params: { slug: string } }) {
  const post = GetPostFromSlug(params.slug);
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-2xl w-full p-4">
          <h1 className="text-6xl font-bold">{post?.title}</h1>
          <p className="text-gray-500">Published {post?.published}</p>
          <RemoteMdxPage contents={post!.content} />
        </div>
      </div>
    </>
  );
}

export default PostPage;
