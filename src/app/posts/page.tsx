import GetPosts from "../../lib/posts/Posts";
import Description from "./Description";
import PostPreview from "./PostPreview";

function Posts() {
    return (
        <>
            <div className="flex justify-center">
                <main className="py-4 max-w-3xl w-full">
                    <h1 className="text-2xl font-bold">Recent Posts</h1>
                    <div className="flex flex-col mt-4 divide-y divide-white/20">
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