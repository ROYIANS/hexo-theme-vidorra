<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <NuxtPage/>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>
<script setup lang="ts">
import {NDialogProvider, NLoadingBarProvider, NMessageProvider, NNotificationProvider} from 'naive-ui'

// fix: 解决 naive-ui 和 tailwindcss 冲突问题
onBeforeMount(() => {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
})
</script>
