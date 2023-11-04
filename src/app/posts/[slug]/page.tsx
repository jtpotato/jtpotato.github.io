import GetPostFromSlug from "@/lib/PostFromSlug";
import RemoteMdxPage from "./MDXRemote";
import "./markdown_styles.css"

function PostPage({ params }: { params: { slug: string } }) {
  const post = GetPostFromSlug(params.slug);
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-2xl w-full p-4">
          <h1 className="text-5xl font-bold mb-4">{post?.title}</h1>
          <p className="text-gray-500 m-0">Published {post?.published}</p>
          <p className="text-gray-500 m-0">Edited {post?.edited}</p>
          <div className="h-[1px] bg-gray-500 my-4" />
          <RemoteMdxPage contents={post!.content} />
        </div>
      </div>
    </>
  );
}

export default PostPage;
