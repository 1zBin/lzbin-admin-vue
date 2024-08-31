<script setup lang="ts">
import { removeInterfaceBridgePort } from "@/api/pop/popDev.ts";
import { getInterfaceList } from "@/api/device/devApi.ts";
import AddDialog from "./components/add-interface-bridge-port.vue";
import { tableOption, tableDataConfig } from "./config/table.config";
import { setTableOption } from "~@/utils/tableConfig";

const props = defineProps({
  popId: {
    type: Number,
    required: true,
  },
});

interface DialogForm {
  editShow: (record: any) => void;
  // 其他属性和方法的类型声明
}

const showDialog = ref(false);
const dialogForm = ref<DialogForm | null>(null);
const gridOptions = ref<any>(setTableOption(tableOption, "checkbox"));
const tableData = ref([]);

onMounted(() => {
  getAllInterfaceList();
});

// 获取列表
const getAllInterfaceList = async () => {
  try {
    gridOptions.value.loading = true;

    const res = await getInterfaceList({
      devID: props.popId,
      devType: "pop",
    });
    tableData.value = res.data.data.interfaceList.map((val: string) => {
      return {
        name: val,
      };
    });
    console.log("InterfaceList", tableData.value);
    gridOptions.value.loading = false;
  } catch (error) {
    gridOptions.value.loading = false;
  }
};

// 新增
const handleAdd = () => {
  showDialog.value = true;
};

// 删除
const handleDelete = async (record: Record<string, any>) => {
  const res = await removeInterfaceBridgePort({ ids: [record.id] });
  if (res.data.code === 2000) getAllInterfaceList();
};

// 批量删除
const handleDeletes = async (ids: number[]) => {
  const res = await removeInterfaceBridgePort({ ids: ids });
  if (res.data.code === 2000) getAllInterfaceList();
};

// 编辑
const handleEdit = (record: Record<string, any>) => {
  console.log("编辑", record);
  dialogForm.value?.editShow(record);
  showDialog.value = true;
};
</script>

<template>
  <CommonTable
    v-model="tableData"
    :gridOptions="gridOptions"
    :tableConfig="tableDataConfig"
    @handleDeletes="handleDeletes"
    @handleDelete="handleDelete"
    @handleEdit="handleEdit"
    @handleAdd="handleAdd"
  />
  <!-- 新增/编辑弹窗 -->
  <AddDialog
    ref="dialogForm"
    v-model:show-dialog="showDialog"
    @refreshList="getAllInterfaceList()"
  ></AddDialog>
</template>

<style scoped></style>
