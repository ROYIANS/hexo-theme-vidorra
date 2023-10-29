<template>
  <footer class="flex flex-col h-40 items-center justify-center text-gray-400 text-sm">
    <!-- social links -->
    <div v-if="links.length" class="flex items-center gap-3 py-3">
      <a v-for="(link, index) in links" :key="index" class="text-lg flex" :title="link.title" :href="link.url">
        <i style="text-shadow: none" :class="link.icon"></i>
      </a>
    </div>
    <!-- busuanzi -->
<!--    <%- partial('_plugins/busuanzi') %>-->
    <!-- copyright -->
    <div class="flex items-center gap-2">
      <span>© {{ new Date().getFullYear().toString().substr(-4) }}</span>
      <i class="ri-hashtag"></i>
      <span>{{ author }}</span>
    </div>
    <!-- powered by -->
    <div class="flex items-center gap-2">
      <span>Powered by</span>
      <a href="https://hexo.io/" target="_blank" rel="noopener noreferrer">Hexo</a>
      <span>&</span>
      <a href="https://github.com/ROYIANS/hexo-theme-dreamlandbook" target="_blank" rel="noopener noreferrer">Dreamland</a>
    </div>

  </footer>
</template>
<script setup lang="ts">
defineProps({
  author: {
    type: String,
    default: 'ROYIANS'
  },
  links: {
    type: Array,
    default: () => []
  }
})
</script>