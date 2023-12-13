export interface SiteInfo extends Record<string, unknown> {
  title: string,
  subtitle: string,
  description: string,
  author: string,
  language: string,
  timezone: string,
  url: string,
  root: string,
  permalink: string,
  keywords: string | null,
  source_dir: string,
  public_dir: string,
  tag_dir: string,
  archive_dir: string,
  category_dir: string,
  code_dir: string,
  i18n_dir: string,
  default_layout: string,
  default_category: string,
  pagination_dir: string,
  theme_config: {
    theme: string,
    theme_color: string,
    favicon: string,
    favicon16: string,
    favicon32: string,
    appleTouchIcon: string,
    maskicon: string,
    manifest: string,
    logo: string,
    avatar: string,
    header: {
      showLogo: boolean,
      showTitle: boolean,
      description: {
        type: string,
        content: string
      }
    },
    home: {
      stickyThread: [
        ...{
          uniqueId: string,
          title?: string,
          cover?: string,
          description?: string
        }
      ]
    },
    pagination: {
      per_page: number,
      order_by: string
    },
    head: {
      links: object[],
      scripts: object[]
    },
    nav: [
      ...{
        title: string,
        icon: string,
        url: string
      },
      ...{
        group: boolean,
        name: string
      }
    ],
    links: [
      ...{
        title: string,
        icon?: string,
        url: string
      }
    ],
    announcement: {
      enable: boolean,
      title: string,
      type: string,
      closable: boolean,
      icon: string,
      content: string
    },
    secrets: {
      qweather_api_key?: string
    }
  }
}
