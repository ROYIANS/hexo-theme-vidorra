import { type Post } from "~/types/post";
import posts from "~/data/posts";

export default function (id: string) : Post {
    return posts.find(item => {
      return item.id === id;
    }) as unknown as Post
}
