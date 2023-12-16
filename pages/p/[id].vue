<template>
  <div>Hello~-${{ $route.params.id }}</div>
</template>

<script setup>

const route = useRoute()

useSeoMeta({
  title: `小梦岛-${route.params.id}`
})
</script>
