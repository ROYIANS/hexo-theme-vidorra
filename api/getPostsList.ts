import { type Post } from "~/types/post";
import posts from "~/data/posts";

export default function () : Promise<Post[]> {
  return new Promise(resolve => {
    resolve((<Post[]><unknown>posts))
  })
}
