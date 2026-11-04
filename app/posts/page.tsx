import Link from "next/link";
import type { Post } from "./types";

export default async function PostsPage() {
  
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <ul className="list-disc pl-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
