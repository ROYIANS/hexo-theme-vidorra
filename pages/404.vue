<script setup lang="ts">
import useHexoData from "~/hooks/useHexoData";

const hexo = await useHexoData()
const route = useRoute()
const themeConfig = hexo.getThemeConfig()
const layout = `${themeConfig?.theme || 'vidorra'}-not-found`
</script>

<template>
  <NuxtLayout :name="layout" />
</template>
