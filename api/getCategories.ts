import { type Category } from "~/types/category";
import categories from "~/data/categories";

export default function () : Promise<Category[]> {
  return new Promise(resolve => {
    // @ts-ignore
    resolve(categories)
  })
}
