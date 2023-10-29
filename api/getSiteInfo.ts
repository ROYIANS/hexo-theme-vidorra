import { type SiteInfo } from "~/types/site"
import site from "~/data/site";

export default function () : Promise<SiteInfo> {
  return new Promise((resolve) => {
    resolve(site)
  })
}
