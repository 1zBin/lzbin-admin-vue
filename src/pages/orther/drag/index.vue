<script lang="ts" setup>
import Single from "./components/single.vue";
import Multiple from "./components/multiple.vue";
const activeKey = ref("1");
</script>

<template>
  <a-card style="min-height: 83vh">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="单个元素拖拽到指定区域">
        <Single />
      </a-tab-pane>
      <a-tab-pane key="2" tab="多个元素拖拽到多个区域" force-render>
        <Multiple />
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>
