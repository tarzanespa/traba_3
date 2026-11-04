import Link from "next/link";
import { notFound } from "next/navigation";
import type { Post } from "../types";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) notFound();

  const post: Post = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-6">{post.body}</p>
      <Link href="/posts">Voltar</Link>
    </main>
  );
}
