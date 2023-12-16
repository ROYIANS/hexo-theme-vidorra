<template>
  <div class="w-full pb-5">
    <div ref="categoriesRef" class="text-sm w-full p-4 relative">
      <ul ref="categoriesInnerRef" class="grid grid-flow-col auto-cols-max rounded-sm overflow-x-auto pr-14">
        <li v-if="curPage !== 1" class="px-4 py-1 m-1 cursor-pointer hover:bg-black hover:text-white dark:hover:bg-default-theme-primary
                   dark:hover:text-zinc-900 rounded">
          <span>首页</span>
        </li>
        <li class="px-4 py-1 m-1 bg-black dark:bg-default-theme-primary text-white dark:text-zinc-900 cursor-pointer
                   hover:bg-black hover:text-white dark:hover:bg-default-theme-primary dark:hover:text-zinc-900 rounded">
          <span>全部</span>
        </li>
        <li v-for="(cat, index) in categories" :key="index" class="px-4 py-1 m-1 cursor-pointer hover:bg-black
                   hover:text-white dark:hover:bg-default-theme-primary dark:hover:text-zinc-900 rounded">
          <span>{{ cat.name }}</span>
        </li>
      </ul>
      <div v-if="hasScroll" class="h-full w-14 flex justify-center items-center bg-gradient-to-l from-80% from-white
                  dark:from-zinc-900 absolute right-0 top-0 text-xl cursor-pointer"
           @click="scrollToEnd">
        <i :class="scrollIcon"></i>
      </div>
    </div>
    <div class="px-8 w-full flex flex-wrap flex-auto lg:block lg:pr-0 lg:pl-6">
      <div class="basis-1/2 grow shrink [&:has(.description)]:basis-11/12 group cursor-pointer my-1 lg:my-8" v-for="(post, index) in posts.list" :key="index">
        <div class="px-2 my-2 grid grid-cols-6 lg:px-0">
          <div class="col-span-1 relative aspect-square">
            <div v-if="post.recommend" class="absolute w-6 h-6 top-0 -left-6 flex items-center justify-center">
              <i class="ri-sparkling-2-fill text-orange-500 dark:text-orange-900"></i>
            </div>
            <div class="w-full h-full border text-zinc-700 dark:border-zinc-800 dark:text-zinc-300 overflow-hidden relative">
              <div class="w-full h-full flex items-center justify-center">
                <div>
                  <div class="text-2xl font-black text-center">{{ $dayjs(post.date).format('DD') }}</div>
                  <div class="text-xs text-center">{{ $dayjs(post.date).format('YYYY-MM') }}</div>
                </div>
              </div>
              <img v-if="post.cover"
                   :src="post.cover"
                   class="w-full h-full object-cover absolute top-0 group-hover:top-[100%]
                          transition-[top] duration-500"/>
            </div>
          </div>
          <div class="col-span-5 px-5 grid">
            <div class="text-xl font-black group-hover:underline self-start">{{ post.title }}</div>
            <div v-if="post.description" class="description heti--serif text-sm py-2">{{ post.description }}</div>
            <div class="text-xs text-zinc-600 dark:text-zinc-400 self-end">
              <span class="text-default-theme-primary">{{ $dayjs(post.date || $dayjs()).fromNow() }}</span>
              <span> / </span>
              <i class="ri-pen-nib-line"></i>
              <span>{{ post.author || siteInfo.author }}</span>
              <span> / </span>
              <i class="ri-hashtag"></i>
              <span
                  v-for="(tag, tIndex) in post.tags"
                  :key="tIndex"
                  class="mx-1 opacity-70 underline"
              >
                {{ tag.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-8 pt-8 flex items-center justify-center">
      <n-pagination
          v-model:page="curPageNum"
          :item-count="totalPostsCount"
          :page-size="pageSize"
          :on-update:page="onPageChange"
      >
        <template #prefix>
          <div class="absolute left-0 px-6">
            共有 {{ totalPostsCount }} 篇作品
          </div>
        </template>
      </n-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import useHexoData from "~/hooks/useHexoData";

const props = defineProps({
  curPage: {
    type: Number,
    default: 1
  }
})
const hexo = await useHexoData()

const categories = hexo.getCategoryList()
const posts = hexo.getPagedPosts(props.curPage)
const siteInfo = hexo.getSiteConfig()
const curPageNum = ref(props.curPage)

const totalPostsCount = posts.total
const pageSize = posts.pageNum

const categoriesInnerRef = ref()

const hasScroll = computed(() => {
  return categoriesInnerRef.value?.scrollWidth > categoriesInnerRef.value?.clientWidth
})

const scrollIcon = ref('ri-skip-right-fill')

const scrollToEnd = () => {
  if (scrollIcon.value === 'ri-skip-right-fill') {
    categoriesInnerRef.value.scrollBy({
      left: categoriesInnerRef.value.clientWidth,
      behavior: 'smooth'
    })
    scrollIcon.value = ('ri-skip-left-fill')
  } else {
    categoriesInnerRef.value.scroll({
      left: 0,
      behavior: 'smooth'
    })
    scrollIcon.value = ('ri-skip-right-fill')
  }
}

const onPageChange = async (pageInfo: number) => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  await navigateTo({ path: `/page/${pageInfo}` })
}

onMounted(() => {
  // useScrollX(categoriesInnerRef.value, categoriesRef.value)
})
</script>
