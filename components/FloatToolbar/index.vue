<template>
  <div class="fixed right-4 bottom-10 z-1000 grid grid-cols-1 gap-y-2 justify-center items-center font-normal text-sm text-center">
    <span title="_p('go_top')" class="opacity-0 p-4 bg-gray-100 dark:bg-black w-5 h-5 rounded-sm cursor-pointer flex justify-center items-center" id="go-top">
      <i class="ri-arrow-up-line"></i>
    </span>
    <span v-if="translate" id="translateLink" class="p-4 bg-gray-100 dark:bg-black w-5 h-5 rounded-sm cursor-pointer flex justify-center items-center">
      {{ translateTarget }}
    </span>
    <span v-if="book" title="_p('toggle_book_content')" id="toggle-catalog" class="p-4 bg-gray-100 dark:bg-black w-5 h-5 rounded-sm cursor-pointer flex justify-center items-center">
      <i class="ri-book-2-fill"></i>
    </span>
    <span title="_p('toggle_theme')" id="toggle-dark" class="p-4 bg-gray-100 dark:bg-black w-5 h-5 rounded-sm cursor-pointer flex justify-center items-center">
      <i class="" id="theme-icon"></i>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  translate: {
    type: Boolean,
    default: true
  },
  translateTarget: {
    type: String,
    default: "繁"
  },
  book: {
    type: Boolean,
    default: true
  }
})
</script>