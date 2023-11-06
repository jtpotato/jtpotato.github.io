import GetPosts from "./Posts"

function GetPostFromSlug(slug: string) {
  const posts = GetPosts()
  const post = posts.find((post) => post.slug === slug)
  return post
}

export default GetPostFromSlug