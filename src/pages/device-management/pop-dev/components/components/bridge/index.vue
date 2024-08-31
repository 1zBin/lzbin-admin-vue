<script setup lang="ts">
import InterfaceBridge from "./interface-bridge/index.vue";
import InterfaceBridgePort from "./interface-bridge-port/index.vue";
const props = defineProps({
  popId: {
    type: Number,
    required: true,
  },
});
const tableActiveKey = ref("interfaceBridge");
</script>

<template>
  <a-tabs v-model:activeKey="tableActiveKey" :tab-position="'left'" animated>
    <a-tab-pane key="interfaceBridge" tab="自定义接口"
      ><InterfaceBridge :popId="props.popId" />
    </a-tab-pane>
    <a-tab-pane key="interfaceBridgePort" tab="网桥接口"
      ><InterfaceBridgePort :popId="props.popId" />
    </a-tab-pane>
  </a-tabs>
</template>

<style scoped></style>
