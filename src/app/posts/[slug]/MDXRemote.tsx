import { MDXRemote } from 'next-mdx-remote/rsc'
 
export default async function RemoteMdxPage({ contents }: { contents: string }) {
  const markdown = contents
  return <MDXRemote source={markdown} />
}