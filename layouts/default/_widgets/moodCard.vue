<template>
  <n-tabs type="segment" size="small" animated class="pb-4 px-2">
    <n-tab-pane name="oasis" tab="今日">
      <div class="heti--serif grid grid-cols-1 justify-items-center items-center w-full h-full text-sm">
        <img alt="mood" src="~/assets/image/default/mood/glass.png" class="w-20 h-20" />
        <div class="text-8xl font-bold">{{ $dayjs().date() }}</div>
        <div>{{ $dayjs().month() + 1 }}月的今天，我<span class="text-indigo-600 font-bold">酷酷的</span></div>
      </div>
    </n-tab-pane>
    <n-tab-pane name="the beatles" tab="心情日历">
      <MoodCalendar />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import MoodCalendar from "~/layouts/default/_widgets/moodCalendar.vue";
</script>
