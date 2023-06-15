import { useEffect, useState } from "react";
import type { Post } from "./types";

interface WithURL {
  url: string;
}

interface WithPosts {
  posts: Post[];
}

function withPosts<T extends WithURL>(
  Component: React.ComponentType<T & WithPosts>
) {
  return function ComponentWithProps(props: T) {
    const [posts, setPosts] = useState([]);
    const { url } = props;

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((posts) => setPosts(posts));
    }, [url]);

    return <Component {...props} posts={posts} />;
  };
}

export { withPosts };
