type Post = {
    slug: string,
    title: string,
    published: Date,
    edited: Date,
    content: string,
    image?: string
}

export default Post;