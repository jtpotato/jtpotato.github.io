import GetPosts from "../../lib/Posts";
import Description from "./Description";
import PostPreview from "./PostPreview";

function Posts() {
    return (
        <>
            <div className="flex justify-center">
                <main className="p-4 max-w-4xl w-full">
                    <h1 className="text-2xl font-bold">Recent Posts</h1>
                    <div className="flex flex-col space-y-4 mt-4">
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