<script setup lang="ts">
import { deleteApi, getAdvancedList } from "@/api/list/advanced-table";
import type { CommonPageData } from "@/types";
import { tableOption, tableDataConfig } from "./config/table.config";
import { topToolsConfig } from "./config/tools.config";

const message = useMessage();
const props = defineProps({
  styleConfig: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

// interface DialogForm {
//   editShow: (record: any) => void;
//   // 其他属性和方法的类型声明
// }

const showDialog = ref(false);
// const dialogForm = ref<DialogForm | null>(null);
const gridOptions = ref<any>(tableOption);
const tableData = ref([]);

const pageData = ref<CommonPageData>({
  page: 1,
  pageSize: 10,
  total: 0,
});

onMounted(() => {
  getAllAdvancedList();
});

// 获取列表
const getAllAdvancedList = async () => {
  try {
    gridOptions.value.loading = true;
    const res = await getAdvancedList(pageData.value);
    console.log("res", res);
    tableData.value = res.data?.list;
    pageData.value.total = res.data?.total;
    console.log("tableData", tableData.value);

    // 如果当前页面删除至没有数据(第一页除外)，则跳转到上一页
    if (
      pageData.value.page &&
      pageData.value.page > 1 &&
      res.data?.list.length === 0
    ) {
      pageData.value.page = pageData.value.page - 1;
      getAllAdvancedList();
    }
    gridOptions.value.loading = false;
  } catch (error) {
    gridOptions.value.loading = false;
  }
};

// 分页跳转函数
const handleTableChange = (currentPage: number, pageSize: number) => {
  pageData.value.page = currentPage;
  pageData.value.pageSize = pageSize;
  getAllAdvancedList();
};

// 新增
const handleAdd = () => {
  showDialog.value = true;
};

// 删除
async function handleDelete(record: Record<string, any>) {
  if (!record.id) return message.error("id 不能为空");
  try {
    const res = await deleteApi(record.id);
    if (res.code === 200) await getAllAdvancedList();
    message.success("删除成功");
  } catch (e) {
    console.log(e);
  } finally {
    close();
  }
}

// 编辑
const handleEdit = (_record: Record<string, any>) => {
  //   dialogForm.value?.editShow(record);
  showDialog.value = true;
};

// 搜索
const searchFn = (data: CommonPageData) => {
  pageData.value = data;
  getAllAdvancedList();
};
</script>

<template>
  <page-container>
    <CommonTools
      :topToolsConfig="topToolsConfig"
      :loading="gridOptions.loading"
      :pageData="pageData"
      :styleConfig="props.styleConfig"
      @searchFn="searchFn"
    />
    <CommonTable
      v-model="tableData"
      :gridOptions="gridOptions"
      :tableConfig="tableDataConfig"
      :pageData="pageData"
      @handleTableChange="handleTableChange"
      @handleDelete="handleDelete"
      @handleEdit="handleEdit"
      @handleAdd="handleAdd"
    />
    <!-- 新增/编辑弹窗 -->
    <!-- <AddDialog
      ref="dialogForm"
      v-model:show-dialog="showDialog"
      :roleList="roleList"
      @refreshList="getAllAdvancedList()"
    ></AddDialog> -->
  </page-container>
</template>

<style scoped></style>
