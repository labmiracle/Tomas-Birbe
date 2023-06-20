import { withPosts } from "./HOC";
import type { Post } from "./types";

function ListOfPosts({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default withPosts(ListOfPosts);
