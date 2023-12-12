<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="curTheme">
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-mt
      border-solid border-default-theme-sideline border-[length:--mask-border-width] dark:bg-black dark:border-black
      top-0 w-full left-0 h-[--mask-width]"></div>
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-mb
      border-solid border-default-theme-sideline border-[length:--mask-border-width] dark:bg-black dark:border-black
      bottom-0 w-full left-0 h-[--mask-width]"></div>
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-ml
      border-solid border-default-theme-sideline border-[length:--mask-border-width] dark:bg-black dark:border-black
      left-0 w-[--mask-width] bottom-0 h-[80vh]"></div>
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-mr
      border-solid border-default-theme-sideline border-[length:--mask-border-width] dark:bg-black dark:border-black
      right-0 w-[--mask-width] bottom-0 h-[80vh]"></div>
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-ml
      border-solid border-default-theme-sideline border-[length:--mask-border-width] dark:bg-black dark:border-black
      left-0 top-0 w-[--mask-width] h-[80vh]"></div>
    <div class="fixed z-999 bg-default-theme-sideline pointer-events-none animate-default-mask-mr
      border-solid border-default-theme-sideline border-[length:--mask-border-width] dark:bg-black dark:border-black
      right-0 top-0 w-[--mask-width] h-[80vh]"></div>
    <Header :site-title="siteTitle" :page-title="pageTitle" :nav-items="navItems" :sub-title="subTitle"
            :description="description" :logo="logoURI" :header-config="headerConfig"/>
    <main class="relative md:min-h-40 min-h-[--content-min-h] ml-[--side-width] bg-default-theme-background dark:bg-zinc-900
               md:mt-12 md:pr-0 md:pl-0 md:pt-0 md:block p-2"
          style="box-shadow: rgba(0, 0, 0, 0.05) 0 1px 2px 0;">
      <slot></slot>
      <div class="hidden md:hidden dark:hidden absolute inset-0 m-5 pointer-events-none">
        <div class="line-h absolute top-0 inset-x-0 h-[2px] bg-left-top bg-repeat-x"></div>
        <div class="line-v absolute right-0 inset-y-0 w-[2px] bg-left-top bg-repeat-y"></div>
        <div class="line-h absolute bottom-0 inset-x-0 h-[2px] bg-left-top bg-repeat-x"></div>
        <div class="line-v absolute left-0 inset-y-0 w-[2px] bg-left-top bg-repeat-y"></div>
      </div>
    </main>
    <Footer :author="siteAuthor" :links="socialLinks"/>
    <n-back-top class="!w-8 !h-8 !rounded-sm !min-w-0 !bg-default-theme-primary-100 hover:!bg-default-theme-primary-800">
      <i class="ri-skip-up-line" />
    </n-back-top>
  </n-config-provider>
</template>

<script setup lang="ts">
import API from "~/api";
import '~/assets/css/default/index.css';
import 'remixicon/fonts/remixicon.css';
import Header from "./_partial/Header.vue";
import Footer from "./_partial/Footer.vue";
import { useDark } from '@vueuse/core'
import { NConfigProvider, NBackTop, darkTheme } from 'naive-ui'

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
const themeOverrides: import('naive-ui').GlobalThemeOverrides = {
  common: {
    primaryColor: '#699054',
    primaryColorHover: '#84a476',
    primaryColorPressed: '#5f834f',
    primaryColorSuppl: '#a0b894'
  }
}

const isDark = useDark()

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
const favicon16URI = siteConfig.value?.theme_config?.favicon16 || faviconURI
const favicon32URI = siteConfig.value?.theme_config?.favicon32 || faviconURI
const appleTouchIconURI = siteConfig.value?.theme_config?.appleTouchIcon
const manifestURI = siteConfig.value?.theme_config?.manifest
const maskIconURI = siteConfig.value?.theme_config?.maskicon
// logo
const logoURI = siteConfig.value?.theme_config?.logo as string || faviconURI as string
// headerConfig
const headerConfig = siteConfig.value?.theme_config?.header || {}
// logo
// const logo = siteConfig.value?.theme_config?.logo
// avatar
// const avatar = siteConfig.value?.theme_config?.avatar

// footer props
// 网站拥有者
const siteAuthor = siteConfig.value?.author || '佚名'
// 社交链接
const socialLinks = siteConfig.value?.theme_config?.links as any[]

const curTheme = computed(() => {
  return isDark.value ? darkTheme : null
})

useSeoMeta({
  title: props.pageTitle ? `${props.pageTitle} - ${siteTitle}` : siteTitle,
  description: props.pageDescription || siteConfig.value?.description,
  keywords: props.pageKeywords || siteConfig.value?.keywords,
  author: props.pageAuthor || siteConfig.value?.author
})
useHead({
  bodyAttrs: {
    class: 'heti--sans text-base text-gray-700 dark:text-gray-200'
  },
  link: [
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Long+Cang&family=Alegreya+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=Vollkorn:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+SC:wght@100;300;400;700;900&family=Noto+Serif+SC:wght@200;300;400;700;900&family=Vollkorn:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: faviconURI
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: faviconURI
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: favicon32URI
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: favicon16URI
    },
    {
      rel: "manifest",
      href: manifestURI
    },
    {
      rel: "mask-icon",
      href: maskIconURI
    },
    {
      rel: "theme-color",
      content: "#699054"
    },
    ...(head.links || [])
  ],
  script: [
    {src: "https://unpkg.com/heti/umd/heti-addon.min.js"},
    ...(head.scripts || [])
  ]
})

onMounted(() => {
  setTimeout(() => {
    document.body.classList.add('bg-default-theme-sideline')
    document.body.classList.add('dark:bg-black')
  }, 500)
})
</script>
