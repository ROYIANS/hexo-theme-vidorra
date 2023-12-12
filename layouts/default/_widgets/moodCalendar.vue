<template>
  <div class="w-full h-full heti--serif grid grid-cols-2">
    <div class="font-bold text-2xl justify-self-start">{{ displayYear }}/{{ displayMonth }}</div>
    <div class="font-bold text-2xl justify-self-end">
      <n-button-group size="tiny">
        <n-button quaternary size="tiny" @click="decreaseMonth">
          <template #icon>
            <i class="ri-arrow-left-s-line"></i>
          </template>
        </n-button>
        <n-button quaternary size="tiny" @click="curMonth">
          <template #icon>
            <i class="ri-loader-3-line"></i>
          </template>
        </n-button>
        <n-button quaternary size="tiny" @click="increaseMonth">
          <template #icon>
            <i class="ri-arrow-right-s-line"></i>
          </template>
        </n-button>
      </n-button-group>
    </div>
    <ul class="grid grid-cols-7 gap-2 select-none col-span-2">
      <li v-for="i in weeks" :key="i" class="flex items-center justify-center text-white text-sm">
        <div class="bg-default-theme-primary-600 dark:bg-default-theme-primary-dark-300 rounded-full w-6 h-6 items-center justify-center flex">
          <span>{{ i }}</span>
        </div>
      </li>
      <li v-for="i in 42" :key="i" class="flex items-center justify-center">
        <div v-if="i < startIndex" class="invisible w-6 h-6"></div>
        <div v-if="i>= startIndex && i < endIndex" class="relative bg-default-theme-primary-100 dark:bg-default-theme-primary-dark-700 cursor-pointer rounded-full w-6 h-6 items-center justify-center flex">
          <img
              v-if="curMonthMoods[i - startIndex]"
              :src="curMonthMoods[i - startIndex]?.url"
              :alt="curMonthMoods[i - startIndex]?.mood"
              class="w-full h-full rounded-full absolute inset-0 hover:animate-default-fade-out"
          />
          <span>{{ i - startIndex + 1 }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import moods from "../config/moods.ts";

const dayjs = useDayjs()

const currentMonth = dayjs().format('MM')
const currentYear = dayjs().format('YYYY')

const displayMonth = ref(currentMonth)
const displayYear = ref(currentYear)

const weeks = ['日', '一', '二', '三', '四', '五', '六']

const startIndex = ref(0)
const endIndex = ref(0)

const curMonthMoods = Object.keys(moods).map(async item => {
  return {
    mood: item,
    url: await moods[item]
  }
})

console.log(curMonthMoods)

const calculate = () => {
  startIndex.value = dayjs(`${displayYear.value}-${displayMonth.value}-01`).day() + 1
  const totalDay = dayjs(`${displayYear.value}-${displayMonth.value}-01`).daysInMonth()
  endIndex.value = startIndex.value + totalDay
}

const increaseMonth = () => {
  moveMonth(1)
}
const decreaseMonth = () => {
  moveMonth(-1)
}

const curMonth = () => {
  moveMonth(0)
}

const moveMonth = (step = 0) => {
  const curMonth = dayjs(`${displayYear.value}-${displayMonth.value}-01`)
  let nextMonth
  if (step > 0) {
    nextMonth = curMonth.add(1, 'month')
  } else if (step < 0) {
    nextMonth = curMonth.subtract(1, 'month')
  } else {
    nextMonth = dayjs()
  }

  displayMonth.value = nextMonth.format('MM')
  displayYear.value = nextMonth.format('YYYY')

  calculate()
}

onMounted(() => {
  calculate()
})
</script>
