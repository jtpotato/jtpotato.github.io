import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Post from "./TPost";
import { globSync } from "glob";

function GetPosts() {
  let fileNameArray: any[] = globSync("posts/**/*.md", {})

  console.log(fileNameArray)

  let posts: Post[] = [];

  // use gray matter to get the title of each post
  fileNameArray.forEach((file) => {
    let fileContents = fs.readFileSync(`${file}`, "utf8");
    let { data, content } = grayMatter(fileContents);

    // Parse dates
    const published = new Date(data.published);
    const edited = new Date(data.edited);

    // generate slug
    const slug = path.parse(file).dir.slice(6) + "--" + path.parse(file).name;

    posts.push({
      slug: slug,
      title: data.title,
      published: published,
      edited: edited,
      content: content,
      image: data.image,
    });
  });

  // Sort posts for newest first
  posts.sort((a, b) => {
    return b.published.getTime() - a.published.getTime();
  });

  return posts;
}

export default GetPosts;
