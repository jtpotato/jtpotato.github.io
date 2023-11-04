import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Post from "./TPost";

function GetPosts() {
    let files: path.ParsedPath[] = [];
    // read every file in posts directory
    fs.readdirSync("posts").forEach(file => {
        files.push(path.parse(file));
    })

    let posts: Post[] = [];

    // use gray matter to get the title of each post
    files.forEach(file => {
        let fileContents = fs.readFileSync(`posts/${file.base}`, "utf8");
        let { data, content } = grayMatter(fileContents);

        // Parse dates
        const published = new Date(data.published);
        const edited = new Date(data.edited);

        posts.push({
            slug: file.name,
            title: data.title,
            published: published,
            edited: edited,
            content: content,
            image: data.image
        });
    })

    // Sort posts for newest first
    posts.sort((a, b) => {
        return b.published.getTime() - a.published.getTime();
    })

    return posts;
}

export default GetPosts;