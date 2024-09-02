import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Unocss from "unocss/vite";
import AntdvResolver from "antdv-component-resolver";
import { viteMockServe } from "vite-plugin-mock"; // 引入 mock 插件提供的方法
import { resolve } from "node:path";

const baseSrc = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(), // Vue 插件
      vueJsx(),
      AutoImport({
        imports: ["vue", "vue-router", "vue-i18n", "@vueuse/core", "pinia"],
        dts: "types/auto-imports.d.ts",
        dirs: ["src/stores", "src/composables"],
      }),
      Components({
        resolvers: [AntdvResolver()],
        dts: "types/components.d.ts",
        dirs: ["src/components"],
      }),
      Unocss(), // Unocss 样式框架插件
      // mock 配置项
      viteMockServe({
        mockPath: "mock",
        localEnabled: command === "serve",
      }),
    ],
    resolve: {
      alias: [
        // 替换模块路径别名
        {
          find: /^ant-design-vue\/es$/,
          replacement: "ant-design-vue/es",
        },
        {
          find: /^ant-design-vue\/dist$/,
          replacement: "ant-design-vue/dist",
        },
        {
          find: /^ant-design-vue\/lib$/,
          replacement: "ant-design-vue/es",
        },
        {
          find: /^ant-design-vue$/,
          replacement: "ant-design-vue/es",
        },
        {
          find: "lodash",
          replacement: "lodash-es",
        },
        {
          find: "~@",
          replacement: baseSrc,
        },
        {
          find: "~",
          replacement: baseSrc,
        },
        {
          find: "@",
          replacement: baseSrc,
        },
        {
          find: "~#",
          replacement: resolve(baseSrc, "./enums"),
        },
      ],
    },
    build: {
      chunkSizeWarningLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks: {
            // 手动指定代码分块
            vue: ["vue", "vue-router", "pinia", "vue-i18n", "@vueuse/core"],
            antd: ["ant-design-vue", "@ant-design/icons-vue", "dayjs"],
            // lodash: ["loadsh-es"],
          },
        },
      },
    },
    server: {
      strictPort: true, // 设置为 true 表示启用严格的端口检查
      host: "0.0.0.0",
      port: 9527, // 本地端口号
      open: false, // 默认浏览器自动打开
      // proxy: {
      //   "/api": {
      //     target: env.VITE_PROXY_API_TARGET,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ""),
      //   },
      // },
    },
  };
});
