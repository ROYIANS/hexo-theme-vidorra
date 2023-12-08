<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-mt
      border-solid border-default-theme-sideline border-[length:--mask-border-width]
      top-0 w-full left-0 h-[--mask-width]"></div>
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-mb
      border-solid border-default-theme-sideline border-[length:--mask-border-width]
      bottom-0 w-full left-0 h-[--mask-width]"></div>
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-ml
      border-solid border-default-theme-sideline border-[length:--mask-border-width]
      left-0 w-[--mask-width] bottom-0 h-[80vh]"></div>
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-mr
      border-solid border-default-theme-sideline border-[length:--mask-border-width]
      right-0 w-[--mask-width] bottom-0 h-[80vh]"></div>
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-ml
      border-solid border-default-theme-sideline border-[length:--mask-border-width]
      left-0 top-0 w-[--mask-width] h-[80vh]"></div>
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-mr
      border-solid border-default-theme-sideline border-[length:--mask-border-width]
      right-0 top-0 w-[--mask-width] h-[80vh]"></div>
    <Header :site-title="siteTitle" :page-title="pageTitle" :nav-items="navItems" :sub-title="subTitle"
            :description="description" :logo="logoURI"/>
    <main class="relative md:min-h-40 min-h-[--content-min-h] ml-[--side-width] pt-[--h-margin]
               pr-[--content-pd-r] pl-[--content-pd-l] md:mt-10 md:pr-0 md:pl-0 md:pt-0 md:block">
      <slot></slot>
      <div class="md:hidden dark:hidden absolute inset-0 m-5 pointer-events-none">
        <div class="line-h absolute top-0 inset-x-0 h-[2px] bg-left-top bg-repeat-x"></div>
        <div class="line-v absolute right-0 inset-y-0 w-[2px] bg-left-top bg-repeat-y"></div>
        <div class="line-h absolute bottom-0 inset-x-0 h-[2px] bg-left-top bg-repeat-x"></div>
        <div class="line-v absolute left-0 inset-y-0 w-[2px] bg-left-top bg-repeat-y"></div>
      </div>
    </main>
    <Footer :author="siteAuthor" :links="socialLinks"/>
  </n-config-provider>
</template>

<script setup lang="ts">
import API from "~/api";
import '~/assets/css/default/index.css';
import 'remixicon/fonts/remixicon.css';
import Header from "./_partial/Header.vue";
import Footer from "./_partial/Footer.vue";
import { NConfigProvider } from 'naive-ui'

const {data: siteConfig} = await useAsyncData("siteConfig", () => API.getSiteInfo())

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

/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    primaryColor: '#699054'
  }
}

// head externals
const head = siteConfig.value?.theme_config?.head || {}

// header props
// 网站标题
const siteTitle = siteConfig.value?.title || 'Untitled'
// 网站副标题
const subTitle = siteConfig.value?.subtitle || ''
// 网站描述
const description = siteConfig.value?.description || ''
// 导航栏项目
const navItems = siteConfig.value?.theme_config?.nav
// favicon
const faviconURI = siteConfig.value?.theme_config?.favicon
// favicon
const logoURI = siteConfig.value?.theme_config?.logo as string || faviconURI as string
// logo
// const logo = siteConfig.value?.theme_config?.logo
// avatar
// const avatar = siteConfig.value?.theme_config?.avatar

// footer props
// 网站拥有者
const siteAuthor = siteConfig.value?.author || '佚名'
// 社交链接
const socialLinks = siteConfig.value?.theme_config?.links as any[]

useSeoMeta({
  title: props.pageTitle ? `${props.pageTitle} - ${siteTitle}` : siteTitle,
  description: props.pageDescription || siteConfig.value?.description,
  keywords: props.pageKeywords || siteConfig.value?.keywords,
  author: props.pageAuthor || siteConfig.value?.author
})
useHead({
  bodyAttrs: {
    class: 'heti--serif text-base bg-default-theme-background dark:bg-zinc-900 text-gray-700 dark:text-gray-200 scroll-smooth'
  },
  link: [
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Long+Cang&family=Alegreya+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=Vollkorn:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+SC:wght@100;300;400;700;900&family=Noto+Serif+SC:wght@200;300;400;700;900&family=Vollkorn:ital,wght@0,400;0,700;1,400;1,700&display=swap"
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
</script>
