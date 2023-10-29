import { Tag } from "./tag"
import { Category } from "./category"
import { Book } from "./book";

export interface Post {
  id: string,
  slug: string,
  title: string,
  layout: string,
  type: 'post' | 'book' | 'chapter'
  date: Date,
  updated: Date,
  comments: Boolean,
  path: string,
  excerpt: string,
  keywords: string[],
  cover: string[],
  content: string,
  text: string,
  link: string,
  raw: string,
  photos: string[],
  categories: Category[],
  tags: Tag[],
  extendConfig: object
}
