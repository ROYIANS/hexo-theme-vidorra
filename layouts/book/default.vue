<template>
  <Header :site-title="siteTitle" :page-title="pageTitle" :nav-items="navItems"/>
  <main class="pt-12 px-0 md:px-12">
    <slot/>
  </main>
  <Footer :author="siteAuthor" :links="socialLinks"/>
  <FloatToolbar/>
</template>

<script setup lang="ts">
import '~/assets/css/book/index.css'
import "remixicon/fonts/remixicon.css"
import Header from "./_partial/Header.vue";
import Footer from "./_partial/Footer.vue";
import FloatToolbar from "~/components/FloatToolbar/index.vue";
import grainColor from "~/utils/grainColor";
import useHexoData from "~/hooks/useHexoData";

const hexo = await useHexoData()
const siteConfig = hexo.getSiteConfig()
const themeConfig = hexo.getThemeConfig()

const props = defineProps({
  pageTitle: {
    type: String,
    default: null
  },
  pageAuthor: {
    type: String,
    default: null
  },
  pageKeywords: {
    type: String,
    default: null
  },
  pageDescription: {
    type: String,
    default: null
  }
})

// head externals
const head = themeConfig?.head || {}

// header props
// 网站标题
const siteTitle = siteConfig?.title || 'Untitled'
// 导航栏项目
const navItems = themeConfig?.nav
// favicon
const faviconURI = themeConfig?.favicon
// logo
// const logo = themeConfig?.logo
// avatar
// const avatar = themeConfig?.avatar

// footer props
// 网站拥有者
const siteAuthor = siteConfig?.author || '佚名'
// 社交链接
const socialLinks = themeConfig?.links as any[]

useSeoMeta({
  title: props.pageTitle ? `${props.pageTitle} - ${siteTitle}` : siteTitle,
  description: props.pageDescription || siteConfig?.description,
  keywords: props.pageKeywords || siteConfig?.keywords,
  author: props.pageAuthor || siteConfig?.author
})
useHead({
  bodyAttrs: {
    class: 'heti--sans bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-200'
  },
  link: [
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Long+Cang&family=Noto+Sans+SC:wght@100;300;400;700;900&family=Noto+Serif+SC:wght@200;300;400;700;900&display=swap"
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: faviconURI
    },
    ...(head.links || [])
  ],
  script: [
    {src: "https://unpkg.com/heti/umd/heti-addon.min.js"},
    ...(head.scripts || [])
  ]
})

onMounted(() => {
  grainColor()
})
</script>
