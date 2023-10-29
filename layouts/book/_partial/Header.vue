<template>
  <header ref="headerRef" class="sticky -top-px left-0 w-full px-5 py-3 backdrop-blur-xl
                backdrop-saturate-150 z-100" style="background: var(--grain-square-white-opacity-blend)">
    <div class="max-auto">
      <nav class="flex items-center text-base min-h-[2rem]">
        <a ref="siteTitleLRef" href="#" class="group">
          <h2 class="font-black heti--serif tracking-tighterp text-l p-2 flex items-center whitespace-nowrap w-max"
              style="inline-size: max-content;">
            {{ siteTitle }}
          </h2>
        </a>
        <div id="header-title"
             class="opacity-0 md:ml-2 md:mt-[0.1rem] text-xs font-medium whitespace-nowrap overflow-hidden overflow-ellipsis">
          {{ pageTitle }}
        </div>
        <div class="flex-1"></div>
        <div class="flex items-center gap-3">
          <n-button v-for="(nav, index) in navItems" :key="index" quaternary size="small">
            <template v-if="nav.icon" #icon>
              <i :class="nav.icon" />
            </template>
            {{ nav.title }}
          </n-button>
          <n-button quaternary size="small">
            <template #icon>
              <i class="ri-search-2-fill" />
            </template>
            _p('search.title')
            <span class="hidden leading-none sm:block text-gray-400 px-1.5 border border-gray-300 rounded-md">
                <span class="sr-only text-xs">Press </span>
                <kbd class="font-sans">
                    <abbr title="Control" class="no-underline text-xs">Ctrl </abbr>
                </kbd>
                <span class="sr-only text-xs"> and </span>
                <kbd class="font-sans text-xs">K</kbd>
                <span class="sr-only text-xs"> to search</span>
            </span>
          </n-button>
        </div>
        <n-dropdown trigger="hover" :options="locales" @select="handleSelect">
          <n-button quaternary size="small">
            <template #icon>
              <i class="ri-earth-line" />
            </template>
            Language
          </n-button>
        </n-dropdown>
        <div
            class="flex items-center justify-center gap-3 ml-3 md:hidden rounded bg-opacity-50 hover:bg-gray-200 dark:hover:bg-zinc-700 px-1.5">
                <span aria-hidden="true" role="img" id="open-menu">
                  <i class="ri-menu-4-fill"></i>
                </span>
          <span class="hidden" aria-hidden="true" role="img" id="close-menu">
                  <i class="ri-close-fill"></i>
                </span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { NButton, NDropdown, useMessage } from 'naive-ui'
import locales from "~/locales/locales";
const props = defineProps({
  siteTitle: {
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
  }
})

const message = useMessage()
const handleSelect = (key: string | number) => {
  message.info(String(key))
}

const headerRef = ref(null)
const siteTitleLRef = ref(null)

const registerHeaderBottomBorder = () => {
  const observer = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio < 1) {
          headerRef.value.style.borderBottom = "1px solid rgb(0 0 0 / 0.05)"
          headerRef.value.classList.add('backdrop-saturate-150', 'backdrop-blur-xl')
          siteTitleLRef.value.classList.remove('hidden')
        } else {
          headerRef.value.style.borderBottom = "none"
          headerRef.value.classList.remove('backdrop-saturate-150', 'backdrop-blur-xl')
          siteTitleLRef.value.classList.add('hidden')
        }
      },
      { threshold: [1] }
  );
  observer.observe(headerRef.value);
}

onMounted(() => {
  registerHeaderBottomBorder()
})
</script>
