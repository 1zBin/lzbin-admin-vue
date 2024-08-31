<script setup lang="ts">
import { addIpRoute } from "@/api/pop/popDev";

import { Form } from "ant-design-vue";
import _ from "lodash";
// import emitter from "~@/utils/eventbus";

const props = defineProps({
  popId: {
    type: Number,
    required: true,
  },
  collapseKey: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const emits = defineEmits(["update:collapseKey"]);

const activeKey = computed({
  get: () => props.collapseKey,
  set: (val) => emits("update:collapseKey", val),
});

const confirmLoading = ref(false);
const formRef = ref<any>(null);

const initValues = reactive<Record<string, any>>({
  comment: "",
  configBelong: undefined,
  popDevID: props.popId,
  disabled: undefined,
  distance: "", // 管理距离
  dstAddress: "", //* 目标地址
  gateway: "", //* 网关
  skipControlerAndDevConsistencyCheck: "no",
});
const formData = ref(initValues);
const { resetFields } = Form.useForm(formData);
const collapsible = ref<"header" | "disabled">("header");

// 切换开关状态
const changeSwitchFn = (checked: boolean | string | number, name: string) => {
  if (checked) {
    formData.value[name] = "yes";
  } else {
    formData.value[name] = "no";
  }
};

// 确认提交表单数据
const clickConfirm = async () => {
  try {
    await formRef.value.validateFields();
    let submitData = _.cloneDeep(formData.value);
    if (submitData.skipControlerAndDevConsistencyCheck === "no") {
      delete submitData.skipControlerAndDevConsistencyCheck;
    }
    let result;
    confirmLoading.value = true;
    delete submitData.popDev;
    result = await addIpRoute(submitData);

    confirmLoading.value = false;
    if (result?.data.code === 2000) {
      clickCancel();
    }
  } catch (error) {
    confirmLoading.value = false;
    console.log("表单校验错误", error);
  }
};

// 关闭弹窗
const clickCancel = () => {
  // 清空表单校验
  resetFields();
  activeKey.value = [""];
  // emitter.emit("refreshTableData", ["cpeAtPop"]);
};
defineExpose({ clickCancel });
</script>

<template>
  <div class="descriptions"></div>
  <a-divider />
  <div class="formBox">
    <a-collapse
      v-model:activeKey="activeKey"
      :collapsible="collapsible"
      :destroyInactivePanel="true"
    >
      <a-collapse-panel key="1" header="添加路由">
        <a-form
          name="route"
          ref="formRef"
          layout="horizontal"
          :model="formData"
          :labelCol="{ span: 4 }"
          :style="{ paddingTop: '20px' }"
        >
          <a-form-item
            label="配置类型"
            name="configBelong"
            :rules="[
              { required: true, message: 'WAN类型不能为空', trigger: 'blur' },
            ]"
          >
            <a-radio-group
              v-model:value="formData.configBelong"
              :style="{ marginBottom: '8px' }"
            >
              <a-radio-button value="Wan">WAN</a-radio-button>
              <a-radio-button value="Lan">LAN</a-radio-button>
            </a-radio-group>
          </a-form-item>
          <a-form-item
            name="gateway"
            label="网关"
            :rules="[
              {
                required: true,
                message: '网关不能为空',
                trigger: 'blur',
              },
            ]"
          >
            <a-input
              style="width: 50%"
              placeholder="请输入网关"
              v-model:value="formData.gateway"
            />
          </a-form-item>
          <a-form-item
            name="dstAddress"
            label="目标距离"
            :rules="[
              {
                required: true,
                message: '目标距离不能为空',
                trigger: 'blur',
              },
            ]"
          >
            <a-input
              style="width: 50%"
              placeholder="请输入目标距离，如192.168.1.1/24"
              v-model:value="formData.dstAddress"
            />
          </a-form-item>
          <a-form-item name="distance" label="管理距离">
            <a-input
              style="width: 50%"
              placeholder="请输入管理距离"
              v-model:value="formData.distance"
            />
          </a-form-item>
          <a-form-item name="disabled" label="配置状态是否禁用">
            <a-switch
              :checked="formData.disabled === 'yes' ? true : false"
              @change="changeSwitchFn($event, 'disabled')"
            />
          </a-form-item>
          <a-form-item
            name="skipControlerAndDevConsistencyCheck"
            label="是否跳过数据一致性检查"
          >
            <a-switch
              :checked="
                formData.skipControlerAndDevConsistencyCheck === 'yes'
                  ? true
                  : false
              "
              @change="
                changeSwitchFn($event, 'skipControlerAndDevConsistencyCheck')
              "
            />
          </a-form-item>
          <!-------------- 底部按钮 -------------->
          <a-form-item>
            <div class="dialog-footer">
              <a-button @click="clickCancel">取消</a-button>
              <a-button
                type="primary"
                @click="clickConfirm"
                :loading="confirmLoading"
                >提交</a-button
              >
            </div>
          </a-form-item>
        </a-form>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<style lang="scss" scoped>
.descriptions {
  padding: 12px 50px;
}
.formBox {
  padding: 12px 50px;
  .dialog-footer {
    text-align: right;
    .ant-btn-primary {
      margin-left: 10px;
    }
  }
}
</style>
