<template>
  <DefaultLayout>
    <section class="px-6 max-w-prose mx-auto gap-12 grid grid-cols-1">
      <div class="flex flex-col md:h-48 items-center justify-center">
        <h1 class="site-title heti--serif text-4xl leading-none relative before:absolute before:block
                        before:w-2 before:h-2 before:top-0 before:-right-2 before:rounded before:border-red-700
                        before:border-2 before:border-solid">
          {{ siteTitle }}
        </h1>
        <p class="text-gray-500 mt-2">
          {{ subTitle }}
        </p>
      </div>

      <div v-for="(post, index) in postList" :key="index" class="grid grid-cols-12 gap-4">
        <section class="col-span-2 text-gray-400 my-1 text-sm time whitespace-nowrap">
          <ul class="text-right">
            <li v-if="post.book" class="leading-relaxed overflow-ellipsis overflow-hidden">
              <a href="post.book.url" title="post.book.title">
                {{ post.book.title }}
              </a>
            </li>
          </ul>
        </section>
        <section class="col-span-2 heti--serif text-4xl text-center">
          {{ `${new Date(post.date).getDate()}`.padStart(2, '0') }}
        </section>
        <a href="post.path" class="col-span-8">
          <header>
            <h2 class="text-xl heti--serif">
              {{ post.title }}
            </h2>
          </header>
          <section class="text-gray-400 my-1 text-sm time">
            <p class="text-xs flex flex-wrap items-center whitespace-nowrap overflow-hidden">
                <span v-if="post.sticky" class="mr-2 text-theme-orange">
                    [<i class="ri-skip-up-line"></i>顶]
                </span>
              <span class="">{{ post.author || siteAuthor }}</span>
              <span class="text-gray px-1">·</span>
              <span class='opacity-50 before:opacity-70'>{{ min2read(post.content) }}min</span>
              <span class="text-gray px-1">·</span>
              <span v-for="(tag, cIndex) in post.tags" :key="cIndex"
                    class="bg-gray-100 dark:bg-black px-1.5 rounded-sm flex ml-1">
                    {{ tag.name }}
                </span>
            </p>
            <p v-if="post.excerpt" class="line-clamp-4 mt-2 ml-5">
              {{ post.excerpt }}
            </p>
          </section>
        </a>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from './default.vue'
import min2read from "~/utils/min2read.js";
import useHexoData from "~/hooks/useHexoData.ts";
const hexo = await useHexoData()

const siteConfig = hexo.getSiteConfig()
const postList = hexo.getPostList()

// 网站标题
const siteTitle = siteConfig?.title || 'Untitled'
// 网站副标题
const subTitle = siteConfig?.subtitle || ''
// 网站作者
const siteAuthor = siteConfig?.author || ''
</script>
