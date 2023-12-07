<script setup lang="ts">
import API from '~/api'
import {NDialogProvider, NGlobalStyle, NLoadingBarProvider, NMessageProvider, NNotificationProvider} from "naive-ui";

const props = defineProps({
  error: {
    type: Object,
    default: () => {
    }
  }
})

const statusCodeToLayoutPage = (code: number) => {
  switch (code) {
    case 404:
      return 'not-found'
    case 403:
      return 'forbidden'
    case 500:
    default:
      return 'error'
  }
}

const route = useRoute()
const {data: siteConfig} = await useAsyncData("siteConfig", () => API.getSiteInfo())
const {theme_config: themeConfig} = siteConfig.value as Record<string, any>
const layout = `${themeConfig.theme}-${statusCodeToLayoutPage(props.error.statusCode)}`
</script>

<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <NuxtLayout :name="layout"/>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
  <n-global-style/>
</template>
