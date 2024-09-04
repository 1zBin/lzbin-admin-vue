<script setup lang="ts">
import { createVNode } from "vue";
import {
  VxeTableEvents,
  VxePagerEvents,
  VxeGridListeners,
  // VxePulldownInstance,
} from "vxe-table";
import { Modal } from "ant-design-vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
// import { checkPermission } from "@/utils/checkPermission";
import { useSelectedRow } from "@/stores/selected-row";
import { formatDate } from "@/utils/date";
import { setTableOption } from "~@/utils/tableConfig";
import _ from "lodash";

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
    default: () => [],
  },
  tableConfig: {
    type: Object,
    default: () => {},
  },
  gridOptions: {
    type: Object,
    default: () => {},
  },
  pageData: {
    type: Object,
    default: () => {},
    required: false,
  },
  styleConfig: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  delsChecked: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const emits = defineEmits([
  "update:modelValue",
  "handleTableChange",
  "handleAdd",
  "handleDelete",
  "handleDeletes",
  "handleEdit",
  "handleReset",
  "handleDetails",
  "handleBackup",
]);

const tableData = computed({
  get: () => props.modelValue,
  set: (val) => emits("update:modelValue", val),
});

// 表格配置项-初始化
const defaultColumnConfig = {
  resizable: true, // 每一列是否启用列宽调整
  isHover: true, // 当鼠标移到列头时，是否要高亮当前头
  isCurrent: true, // 当鼠标点击列头时，是否要高亮当前列
};
const defaultRowConfig = {
  keyField: "id", // 每行的标识
  useKey: true,
  isHover: true, // 当鼠标移到行时，是否要高亮当前行
};
const radioConfig = reactive<any>({
  trigger: props.styleConfig.type === "modalTable" ? "row" : null,
});
const checkboxConfig = reactive<any>({
  trigger: props.styleConfig.type === "modalTable" ? "row" : null,
  checkField: "checkField",
});

// 表格上的分页器属性配置
const pagerConfig: any = computed(() =>
  gridConfigs.value.pagerConfig &&
  gridConfigs.value.pagerConfig.enabled === false
    ? null
    : {
        total: props.pageData.total,
        currentPage: props.pageData.page,
        pageSize: props.pageData.pageSize,
        layouts: [
          "Sizes", // 每页条数
          // "PrevJump", // 跳转至第一页
          "PrevPage", // 上一页
          "Number", // 页数数字
          "NextPage", // 下一页
          // "NextJump", // 跳转至最后一页
          "FullJump", // 跳转至哪一页
          "Total", // 共几条记录
        ],
      }
);

const xTable = ref<any>();
const gridConfigs = ref<any>(_.cloneDeep(props.gridOptions));
const selectedRow = useSelectedRow();
const { checkboxIds, modalTableIds, modalTableList } = toRefs(selectedRow);
const modalArg =
  props.tableConfig && props.tableConfig.modalArguments
    ? props.tableConfig.modalArguments
    : {};
const dateKeys: string[] = [
  "CreatedAt",
  "UpdatedAt",
  "loginTime",
  "crtCreateAt",
  "crtExpireAt",
];

onMounted(() => {
  // 动态处理列的显示
  gridConfigs.value.columns = gridConfigs.value.columns.map((val: any) => {
    if (val.field === "action") {
      // 在弹窗表格里不需要显示操作那一列
      if (props.styleConfig.type === "modalTable") {
        val.visible = false;
      } else {
        val.visible = true;
      }
    }
    return val;
  });

  const $table = xTable.value;
  if (!$table) return;
  if (props.styleConfig.type === "modalTable") {
    // 重新赋值勾选类型(单选/多选)
    gridConfigs.value = setTableOption(
      gridConfigs.value,
      props.styleConfig.tableType
    );
    // 弹窗表格时隐藏工具栏
    $table.toolbarConfig.enabled = false;
    // 回显勾选状态
    echoCheckedsFn();
  } else {
    selectedRow.clearCheckboxList();
    // 页面初始化时判断一次
    isDisabled($table, checkboxIds.value);
  }
});

// 渲染初始化勾选状态的回显
const echoCheckedsFn = () => {
  if (props.styleConfig.tableType === "radio") {
    radioConfig["checkRowKey"] = `${modalTableIds.value[0]}`;
  } else {
    checkboxConfig["checkRowKeys"] = modalTableIds.value.map((num: number) =>
      num.toString()
    );
  }
};

// 顶部按钮事件
const gridEvents: VxeGridListeners<Record<string, object>> = {
  toolbarButtonClick(row) {
    const $table = xTable.value;
    if ($table) {
      switch (row.button.code) {
        case "add": {
          emits("handleAdd");
          break;
        }
        case "dels": {
          modalFunction(
            modalArg.delete.title,
            "handleDeletes",
            checkboxIds.value
          );
          break;
        }
        case "backup": {
          emits("handleBackup");
          break;
        }
      }
    }
  },
};

// 右侧操作按钮
const handleActionBtn = (record: Record<string, object>, key: string) => {
  if (key === "del") {
    modalFunction(modalArg.delete.title, "handleDelete", record);
  } else if (key === "reset") {
    modalFunction(modalArg.reset.title, "handleReset", record);
  }

  const keys = ["edit", "addson", "details"];
  if (keys.includes(key)) {
    const emitsKey = `handle${capitalizeFirstLetter(key)}` as any;
    emits(emitsKey, record);
  }
};

// 单选
const radioChangeEvent: VxeTableEvents.RadioChange<Record<string, object>> = ({
  row,
}) => {
  selectedRow.updateRadioData(row);
  if (props.styleConfig.type === "modalTable") {
    selectedRow.updateModalTableList([row], true);
  }
  console.log("单选事件", selectedRow.radioData, selectedRow.radioId);
};

// 复选
const selectChangeEvent: VxeTableEvents.CheckboxChange<
  Record<string, object>
> = ({ checked }) => {
  const $table = xTable.value;
  if ($table) {
    const records = $table.getCheckboxRecords();
    if (props.styleConfig.type === "modalTable") {
      if (checked) {
        selectedRow.updateModalTableList(records, checked);
      } else {
        // 先找出取消勾选的对象数组
        const cancelCheckeds = _.differenceBy(tableData.value, records, "id");
        const otherList = _.differenceBy(
          modalTableList.value,
          cancelCheckeds,
          "id"
        );
        selectedRow.updateModalTableList(otherList, checked);
      }
    } else {
      selectedRow.updateCheckboxList(records);
      isDisabled($table, checkboxIds.value);
    }
  }
};

// 全选
const selectAllChangeEvent: VxeTableEvents.CheckboxAll<
  Record<string, object>
> = ({ checked }) => {
  const $table = xTable.value;
  if ($table) {
    let records = $table.getCheckboxRecords();
    if (props.styleConfig.type === "modalTable") {
      if (checked) {
        selectedRow.updateModalTableList(tableData.value, checked);
      } else {
        const otherList = _.differenceBy(
          modalTableList.value,
          tableData.value,
          "id"
        );
        selectedRow.updateModalTableList(otherList, checked);
      }
    } else {
      selectedRow.updateCheckboxList(records);
      isDisabled($table, checkboxIds.value);
    }
  }
};

// 控制分页
const handlePageChange: VxePagerEvents.PageChange = ({
  currentPage,
  pageSize,
}) => {
  echoCheckedsFn();
  emits("handleTableChange", currentPage, pageSize);
};

/* ------------------------- 一些复用函数 -------------------------- */

// 判断多选框为空数组时，批量删除为禁用状态
const isDisabled = (document: any, ids: number[] | string[]) => {
  if (document && document.toolbarConfig && document.toolbarConfig.buttons) {
    let data = document.toolbarConfig.buttons.find(
      (val: any) => val.code === "dels"
    );
    if (!data) return;
    if (ids.length === 0) {
      data["disabled"] = true;
    } else {
      data["disabled"] = false;
    }
  }
};

// 将字符串首字母转成大写
const capitalizeFirstLetter = (str: any): any => {
  if (str.length === 0) {
    return str; // 空字符串则直接返回
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Modal.method() 简洁弹窗函数
const modalFunction = (
  title: string,
  emitName: any,
  data: any,
  checked?: boolean | string | number,
  column?: any
) => {
  Modal.confirm({
    title: title,
    icon: createVNode(ExclamationCircleOutlined),
    okText: "确认",
    cancelText: "取消",
    onOk() {
      emits(emitName, data);
    },
    onCancel() {
      console.log("Cancel", checked, column);
      if (emitName === "changeSwitchFn" && column.key) {
        let status = [column.checkedValue, column.unCheckedValue];
        let filterValue = status.filter((val) => val !== checked);
        data[column.key] = filterValue[0];
      }
    },
    class: "test",
  });
};

// --------------------------

// 离开页面时清除一些缓存数据
onUnmounted(() => {
  selectedRow.updateCheckboxList([]);
  selectedRow.setOrginModalTable([]);
  localStorage.removeItem("VXE_TABLE_CUSTOM_COLUMN_VISIBLE");
});
</script>

<template>
  <a-card
    :bodyStyle="
      props.styleConfig.antCardStyle ? props.styleConfig.antCardStyle : {}
    "
  >
    <vxe-grid
      ref="xTable"
      round
      v-bind="gridConfigs"
      :data="tableData"
      :size="
        props.styleConfig && props.styleConfig.type === 'modalTable'
          ? props.styleConfig.size
          : 'middle'
      "
      :pager-config="
        gridConfigs.pagerConfig ? gridConfigs.pagerConfig : pagerConfig
      "
      :show-overflow="'tooltip'"
      :show-header-overflow="'tooltip'"
      :column-config="
        gridConfigs.columnConfig
          ? gridConfigs.columnConfig
          : defaultColumnConfig
      "
      :row-config="
        gridConfigs.rowConfig ? gridConfigs.rowConfig : defaultRowConfig
      "
      :radio-config="
        props.styleConfig.type === 'modalTable' ? radioConfig : null
      "
      :checkbox-config="
        props.styleConfig.type === 'modalTable' ? checkboxConfig : null
      "
      v-on="gridEvents"
      @radio-change="radioChangeEvent"
      @checkbox-all="selectAllChangeEvent"
      @checkbox-change="selectChangeEvent"
      @page-change="handlePageChange"
    >
      <template #name="{ row, column }">
        <template v-if="column.field === 'hidden'">
          <a-tag v-if="!row.hidden" color="success">显示</a-tag>
          <a-tag v-else color="default">隐藏</a-tag>
        </template>
        <!-- --------操作-------- -->
        <!-- --------时间-------- -->
        <template v-else-if="dateKeys.includes(column.field)">
          <span>
            {{ formatDate(row[column.field]) }}
          </span>
        </template>
        <!-- --------操作-------- -->
        <template v-else-if="column.field === 'action'">
          <div v-if="tableConfig.action" flex gap-2>
            <template
              v-for="action in tableConfig.action"
              :key="`${tableConfig.name}+${action.key}`"
            >
              <a
                :style="action.style"
                @click="handleActionBtn(row, action.key)"
              >
                {{ action.name }}
              </a>
            </template>
          </div>
        </template>
      </template>
    </vxe-grid>
  </a-card>
</template>

<style lang="less" scoped></style>
