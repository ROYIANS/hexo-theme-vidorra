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
  <MagicCursor />
</template>

<script setup lang="ts">
import '~/assets/css/default/index.css';
import 'remixicon/fonts/remixicon.css';
import Header from "./_partial/Header.vue";
import Footer from "./_partial/Footer.vue";
import useLocalCache from "~/hooks/useLocalCache";
import { darkTheme } from 'naive-ui'
import useHexoData from "~/hooks/useHexoData";

const hexo = await useHexoData()

const siteConfig = hexo.getSiteConfig()!
const themeConfig = hexo.getThemeConfig()!


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

const isDark = ref(false)
const curTheme = computed(() => {
  return isDark.value ? darkTheme : null
})

// head externals
const head = themeConfig.head

// header props
// 网站标题
const siteTitle = siteConfig.title || 'Untitled'
// 网站副标题
const subTitle = siteConfig.subtitle || ''
// 网站描述
const description = siteConfig.description || ''
// 导航栏项目
const navItems = themeConfig.nav
// favicon
const faviconURI = themeConfig.favicon
const favicon16URI = themeConfig.favicon16 || faviconURI
const favicon32URI = themeConfig.favicon32 || faviconURI
const appleTouchIconURI = themeConfig.appleTouchIcon
const manifestURI = themeConfig.manifest
const maskIconURI = themeConfig.maskicon
// logo
const logoURI = themeConfig.logo as string || faviconURI as string
// headerConfig
const headerConfig = themeConfig.header || {}
// logo
// const logo = themeConfig.logo
// avatar
// const avatar = themeConfig.avatar

// footer props
// 网站拥有者
const siteAuthor = siteConfig.author || '佚名'
// 社交链接
const socialLinks = themeConfig.links as any[]

useSeoMeta({
  title: props.pageTitle ? `${props.pageTitle} - ${siteTitle}` : siteTitle,
  description: props.pageDescription || siteConfig.description,
  keywords: props.pageKeywords || siteConfig.keywords,
  author: props.pageAuthor || siteConfig.author
})
useHead({
  bodyAttrs: {
    class: 'heti--sans text-base text-main-text dark:text-gray-200'
  },
  link: [
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,200;0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;0,6..72,800;1,6..72,200;1,6..72,300;1,6..72,400;1,6..72,500;1,6..72,600;1,6..72,700;1,6..72,800&family=Noto+Sans+SC:wght@100;200;300;400;500;600;700;800;900&family=Noto+Serif+SC:wght@200;300;400;500;600;700;900&display=swap"
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

onBeforeMount(() => {
  toggleDarkMode(true)
})

const toggleDarkMode = (notToggle = false) => {
  const { getCache, setCache } = useLocalCache()
  const isDarkMode = getCache('darkMode')
  console.log('isDark', isDarkMode)
  const finalDark = notToggle ? isDarkMode : !isDarkMode
  setCache('darkMode', finalDark)
  isDark.value = finalDark
  if (finalDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

provide('toggleDarkMode', toggleDarkMode)
</script>
