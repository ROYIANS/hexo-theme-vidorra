<template>
  <n-tabs type="segment" size="small" animated class="pb-4 px-2">
    <n-tab-pane name="oasis" tab="今日">
      <div v-if="curMood" class="heti--serif grid grid-cols-1 justify-items-center items-center w-full h-48 text-sm p-4 overflow-hidden">
        <div class="h-full w-12 absolute left-0 top-0 bg-gradient-to-r from-white dark:from-zinc-900 z-1"></div>
        <div class="h-full w-12 absolute right-0 top-0 bg-gradient-to-l from-white dark:from-zinc-900 z-1"></div>
        <img alt="mood" :src="moods[curMood]" class="w-20 h-20 hover:animate-spin-y-1.5" />
        <ul class="animate-scroll py-5 mx-auto list-none absolute top-0 left-0 heti--sans -z-1">
          <template v-for="i in 8" :key="i">
            <li class="relative mx-auto p-0 -m-1.5 list-none">
              <div class="w-fit flex relative font-black text-lg">
                <span class="whitespace-nowrap py-0 px-1" v-for="k in 5">
                  <span v-if="i % 2 === 1">今天的我，是<span class="text-indigo-600 font-bold uppercase">{{ curMood }}</span>的我。</span>
                  <span class="text-sm" v-else>{{ currentTime }}</span>
                </span>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </n-tab-pane>
    <n-tab-pane name="the beatles" tab="心情日历">
      <MoodCalendar />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import moods from "../config/moods.ts";
import MoodCalendar from "../_widgets/MoodCalendar.vue";

const dayJs = useDayjs()

const moodList = Object.keys(moods)
const randomNum = ref(0)
const curMood = ref('')

const currentTime = computed(() => {
  return dayJs().format(' YYYY-MM-DD  YYYY-MM-DD  YYYY-MM-DD  YYYY-MM-DD  YYYY-MM-DD ')
})

onMounted(() => {
  randomNum.value = Math.floor(Math.random() * 31)
  curMood.value = moodList[randomNum.value]
})
</script>

<style>
.animate-scroll {
  --initial: 0;
  --final: -20%;
  --initial-2: 30%;
  --final-2: 50%;
}

.animate-scroll li:nth-child(odd) div {
  transform: translate3d(var(--initial), 0, 0);
  animation: slide 5s linear infinite;
}

.animate-scroll li:nth-child(even) div {
  transform: translate3d(var(--initial-2), 0, 0);
  animation: slide-2 5s linear infinite;
  left: -100%;
}

@keyframes slide {
  0% {
    transform: translate3d(var(--initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--final), 0, 0);
  }
}
@keyframes slide-2 {
  0% {
    transform: translate3d(var(--initial-2), 0, 0);
  }

  100% {
    transform: translate3d(var(--final-2), 0, 0);
  }
}
</style>
