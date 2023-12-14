import site from '~/data/site'
import data from '~/data/data'
import pages from '~/data/pages'
import posts from '~/data/posts'
import tags from '~/data/tags'
import categories from "~/data/categories"

export default function () : Promise<unknown> {
  return new Promise(resolve => {
    resolve({
      site,
      data,
      pages,
      posts,
      tags,
      categories
    })
  })
}
