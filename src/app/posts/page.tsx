import GetPosts from "../../lib/posts/Posts";
import Header from "../Header";
import Description from "./Description";
import PostPreview from "./PostPreview";

function Posts() {
  return (
    <>
      <div className="flex justify-center">
        <main className="p-4 max-w-3xl w-full">
          <Header />
          <h1 className="text-2xl font-bold py-4 mt-12">Recent Posts</h1>
          <div className="flex flex-col mt-4 space-y-8">
            {GetPosts().map((post) => (
              <PostPreview post={post} key={post.title} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Posts;
