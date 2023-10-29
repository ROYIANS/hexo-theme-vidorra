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
  keywords: string | null
}
