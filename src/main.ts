import { createPinia } from "pinia";
import { createApp } from "vue";
import type { App } from "vue";
import Root from "./App.vue";
import { setupI18n } from "./locales";
import { setupAccessDirective, setupLoadingDirective } from "./directive";
import router from "~/router";
import "~/router/router-guard";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import * as antIcons from "@ant-design/icons-vue";
import "~/assets/styles/reset.css";
import "uno.css";
// 完整导入 UI 组件库
import VxeUI from "vxe-pc-ui";
import "vxe-pc-ui/lib/style.css";
// 完整导入 表格库
import VxeUITable from "vxe-table";
import "vxe-table/lib/style.css";

import { setupProdMockServer } from "../mock/config/_createProductionServer";
setupProdMockServer();

const pinia = createPinia();
async function start() {
  const app: App = createApp(Root);

  Object.keys(antIcons).forEach((key) => {
    // @ts-ignore
    app.component(key, antIcons[key]);
  });
  // 添加到全局
  app.config.globalProperties.$antIcons = antIcons;

  app.use(Antd);
  app.use(VxeUI);
  app.use(VxeUITable);
  app.use(pinia);
  await setupI18n(app);
  setupDirective(app);
  app.use(router);
  app.mount("#app");
  app.config.performance = true;
}

declare module "vue" {
  export interface ComponentCustomProperties {
    $antIcons: any;
  }
}

function setupDirective(app: App) {
  // 注册loading自定义指令
  setupLoadingDirective(app);
  setupAccessDirective(app);
}
start();
