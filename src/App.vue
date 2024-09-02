<script setup lang="ts">
const appStore = useAppStore();
const { antd } = useI18nLocale();
const getPopupContainer = (trigger: any) => {
  if (trigger) {
    return trigger.parentNode;
  } else {
    return document.body;
  }
};
</script>

<template>
  <a-config-provider
    :theme="appStore.theme"
    :getPopupContainer="(getPopupContainer as any)"
    :locale="antd"
  >
    <RouterView />
  </a-config-provider>
</template>
