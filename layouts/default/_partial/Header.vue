<template>
  <header class="md:hidden py-[0.5rem] px-[--h-margin] h-full w-[--side-width]
                 fixed overflow-auto bg-white dark:bg-zinc-900 border-r border-dotted
                 border-gray-300 text-gray-700 dark:text-gray-200 text-sm">
    <div class="animate-default-left-in">
      <div class="w-full mx-0 my-8">
        <router-link to="/">
          <div class="flex flex-col items-center justify-center">
            <h1 class="site-title heti--serif heti--vertical text-3xl leading-none relative before:absolute before:block
                        before:w-2 before:h-2 before:top-0 before:-right-2 before:rounded before:border-default-theme-primary
                        before:border-2 before:border-solid before:bg-default-theme-primary break-all">
              {{ siteTitle }}
            </h1>
            <p class="text-gray-500 mt-2 text-xs">
              {{ subTitle }}
            </p>
          </div>
        </router-link>
      </div>
      <div class="hidden">{{ description }}</div>
      <nav class="mb-12 select-none">
        <ul class="list-none flex flex-col p-0 m-0">
          <template v-for="(item, index) in navItems" :key="index">
            <li v-if="item.group" class="pt-10 pb-1 m-0 order-2 text-left font-bold text-xs text-default-theme-primary">{{ item.name }}</li>
            <li v-else class="p-0 m-0 order-2">
              <router-link
                  v-if="item.url[0] === '/'"
                  :to="item.url"
                  class="no-underline flex items-center py-3 leading-none touch-manipulation
                         after:content-[''] after:flex-grow after:ml-1 after:inline-block after:h-px
                         after:border-b after:border-dotted after:border-gray-300
                         hover:text-default-theme-primary hover:after:border-default-theme-primary">
                <i :class="item.icon" class="text-xl leading-none w-5 h-5 relative"></i>
                <span class="pr-2 pl-1.5 leading-6 h-6">{{ item.title }}</span>
              </router-link>
              <a
                  v-else
                  :href="item.url"
                  target="_blank"
                  class="no-underline flex items-center py-3 leading-none touch-manipulation
                         after:content-[''] after:flex-grow after:ml-1 after:inline-block after:h-px
                         after:border-b after:border-dotted after:border-gray-300
                         hover:text-default-theme-primary hover:after:border-default-theme-primary">
                <i :class="item.icon" class="text-xl leading-none w-5 h-5 relative"></i>
                <span class="pr-2 pl-1.5 leading-6 h-6">{{ item.title }}</span>
              </a>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
  <div class="md:flex hidden bg-default-theme-primary w-full h-10 fixed transition-all duration-[--duration] ease-[--curve]
              z-9999 left-0 -top-px justify-between items-center">
    <div class="shrink grow basis-auto h-full text-left ml-3 mr-12 max-w-[50%] overflow-hidden flex justify-start items-center no-underline">
      <router-link to="/" class="shrink-0">
        <div class="heti--serif font-bold text-white text-lg relative flex items-center after:absolute
                    after:w-1 after:h-1 after:top-1 after:-right-1 after:rounded after:border-white
                    after:border after:border-solid after:bg-white">
          <div v-if="logo.startsWith('ri-')" class="w-6 h-6 text-6 flex items-center justify-center">
            <i :class="logo" />
          </div>
          <div v-else :style="`background-image: url(${logo})`" class="w-6 h-6 bg-contain bg-no-repeat bg-[left_center]" />
          <div class="pl-1">{{ siteTitle }}</div>
        </div>
      </router-link>
    </div>
    <div class="flex shrink-0 grow-0 basis-auto px-2 h-full items-center text-xl text-right text-white transition-all duration-[--duration] ease-[--curve]">
      <i class="ri-menu-3-line"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  siteTitle: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  pageTitle: {
    type: String,
    default: ''
  },
  navItems: {
    type: Object,
    default: () => []
  },
  logo: {
    type: String,
    default: ''
  }
})
</script>
