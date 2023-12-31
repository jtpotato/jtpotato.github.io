import { expect, test } from "bun:test";
import { generateRewrites } from "./generateRewrites.js";

test("Generates correct rewrites", () => {
  expect(
    generateRewrites({ "/posts": "https://jtpotato-posts.vercel.app/posts" })
  ).toEqual([
    {
      source: "/posts",
      destination: "https://jtpotato-posts.vercel.app/posts",
    },
    {
      source: "/posts/:content*",
      destination: "https://jtpotato-posts.vercel.app/posts/:content*",
    }
  ]);
});
