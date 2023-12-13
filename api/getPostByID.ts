import { type Post } from "~/types/post";
import posts from "~/data/posts";

export default function (id: string) : Promise<Post> {
  return new Promise(resolve => {
    resolve(posts.find(item => {
      return item.uniqueId === id;
    }) as unknown as Post)
  })
}
