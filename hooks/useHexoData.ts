import type {SiteInfo} from "~/types/site";
import type {Post} from "~/types/post";
import type {Tag} from "~/types/tag";
import type {Category} from "~/types/category";
import hexoDb from "~/api/hexo";

type HexoDataType = { site: SiteInfo, posts: Post[], tags: Tag[], categories: Category[] }

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
}

export default async function useHexoData(): Promise<HexoData> {
  const { data: hexoData } = await useAsyncData('hexoData', () => hexoDb())
  return new HexoData(hexoData.value as HexoDataType)
}
