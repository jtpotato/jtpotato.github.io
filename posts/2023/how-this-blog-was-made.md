---
title: How This Blog Was Made
published: Nov 5 2023
edited: Nov 6 2023
---
This post will be updated regularly with any changes to how I make/host this site. This is a simple, high-level overview of how I did this - for specific implementation refer to https://github.com/jtpotato/jtpotato.github.io

### **Tech Stack**

- GitHub Pages
- Next.js
- Bun

### **Favicon**

[GitHub Identicons!](https://github.blog/2013-08-14-identicons/)

*oops, we're still writing this*

# Blog

1. Read markdown files from a `posts` folder
2. Use `next-mdx-remote` to parse into Next.js
3. Use `gray-matter` to fetch data from frontmatter of each post

![The frontmatter of this post](https://github.com/jtpotato/jtpotato.github.io/assets/58995538/3a88153e-0c05-41ff-b20a-35398d3063c7)


The frontmatter of this post!

1. Compose the post page - title, published/edited dates
2. Apply styles (currently done through global css, should probably be changed at some point in the future)

# Firetrace Project Page

![Firetrace Project Page](https://github.com/jtpotato/jtpotato.github.io/assets/58995538/91e22ed8-444d-4cde-9751-40fadde9d960)


The first part of the landing page.

https://jtpotato.github.io/projects/firetrace

- `framer-motion` for animations
- Blurred `<canvas>` background. Circles are given velocity and direction and constantly reprinted to canvas. Canvas is darkened after every frame to create a fade-out effect.
