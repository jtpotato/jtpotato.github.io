import GetPosts from "../../lib/Posts";

function Posts() {
    return (
        <>
            <div className="flex justify-center">
                <main className="p-4 max-w-4xl w-full">
                    <p>Recent posts:</p>
                    <div>
                        {GetPosts().map((post) => (
                            <div key={post.title}>

                            <p >{post.title}</p>
                            <p>{post.published}</p>
                            <p style={{ "maxWidth": "50ch", "whiteSpace": "nowrap", "textOverflow": "ellipsis", "overflow": "hidden" }}>{post.content}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}

export default Posts;