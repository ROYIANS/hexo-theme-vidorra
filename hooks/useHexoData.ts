import type {SiteInfo} from "~/types/site";
import type {Post} from "~/types/post";
import type {Tag} from "~/types/tag";
import type {Category} from "~/types/category";
import hexoDb from "~/api/hexo";

type HexoDataType = { site: SiteInfo, posts: Post[], tags: Tag[], categories: Category[] }

type PagedPosts = {
  total: number,
  currentPage: number,
  pageNum: number,
  list: Post[]
}

class HexoData {
  private siteConfig: SiteInfo | null;
  private posts: Post[];
  private tags: Tag[];
  private categories: Category[]

  constructor(data: HexoDataType) {
    const {site, posts, tags, categories} = data
    this.siteConfig = site
    this.posts = posts
    this.tags = tags
    this.categories = categories
  }

  getSiteConfig() {
    return this.siteConfig;
  }

  getPostList() {
    return this.posts
  }

  getTagList() {
    return this.tags
  }

  getCategoryList() {
    return this.categories
  }

  getThemeConfig() {
    return this.siteConfig!.theme_config
  }

  getPagedPosts(curPage: number, pageNum?: number): PagedPosts {
    const { pagination } = this.getThemeConfig()
    const { per_page, order_by } = pagination
    let list: Post[] = []

    const clonedPosts = this.posts.map(item => {
      return {
        ...item
      }
    })

    clonedPosts.sort((a: Post, b: Post) => {
      const reverse = order_by.startsWith('-')
      let orderBy = order_by
      if (reverse) {
        orderBy = order_by.substring(1)
        // @ts-ignore
        if ((a[orderBy] || 0) < (b[orderBy] || 0)) {
          return 1
        } else {
          return -1
        }
      }
      // @ts-ignore
      if ((a[orderBy] || 0) > (b[orderBy] || 0)) {
        return 1
      } else {
        return -1
      }
    })

    const curPageNum = pageNum || +per_page

    if (curPageNum === -1) {
      list = clonedPosts
    } else {
      const offset = curPageNum * (curPage - 1)
      list = clonedPosts.slice(offset, curPageNum)
    }

    return {
      currentPage: curPage,
      total: this.posts.length,
      pageNum: per_page,
      list: list
    }
  }
}

export default async function useHexoData(): Promise<HexoData> {
  const { data: hexoData } = await useAsyncData('hexoData', () => hexoDb())
  return new HexoData(hexoData.value as HexoDataType)
}
