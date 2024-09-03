import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

// 逐一导入您的mock.ts文件
// 如果使用vite.mock.config.ts，只需直接导入文件
// 可以使用 import.meta.glob功能来进行全部导入
import userModule from "../user";
import menuModule from "../menu";
import crudTable from "../crud-table";
import basicTist from "../basic-list";
import consultList from "../consult-list";
import advancedList from "../advanced-list";

export function setupProdMockServer() {
  createProdMockServer([
    ...userModule,
    ...menuModule,
    ...crudTable,
    ...basicTist,
    ...consultList,
    ...advancedList,
  ]);
}
