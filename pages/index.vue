<script setup lang="ts">
import API from '~/api'
const route = useRoute()
const { data: siteConfig } = await useAsyncData("siteConfig", () => API.getSiteInfo())
const { theme_config: themeConfig } = siteConfig.value as Record<string, any>
const layout = `${themeConfig.theme}-home`
</script>

<template>
  <NuxtLayout :name="layout" />
</template>
