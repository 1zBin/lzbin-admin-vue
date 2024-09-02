<script setup lang="ts">
import errorUserAvatar from "@/assets/images/errorUserAvatar.png";
import { useLogout, useUserStore, useMultiTab } from "@/stores";
import { Modal } from "ant-design-vue";
import { RouterLink } from "vue-router";

const { userInfo } = useUserStore();
const avatar = ref("");
const nickName = ref(userInfo.nickName);

const { logoutFn } = useLogout();
const { clearAllTab } = useMultiTab();
const logout = () => {
  Modal.confirm({
    title: "温馨提示",
    content: "你确认退出Antdv System吗?",
    okText: "确认",
    cancelText: "取消",
    onOk() {
      logoutFn();
      clearAllTab();
    },
  });
};

onMounted(async () => {
  if (userInfo.avatar) {
    avatar.value = userInfo.avatar;
  }
});

// 图片加载错误则用本地图片
const loadErrorFn = () => {
  avatar.value = errorUserAvatar;
};
</script>

<template>
  <a-dropdown>
    <span
      hover="bg-[var(--hover-color)]"
      flex
      items-center
      h-48px
      px-12px
      cursor-pointer
      class="transition-all-300"
    >
      <a-avatar
        :src="avatar"
        :loadError="(loadErrorFn as any)"
        mr-8px
        size="small"
      />
      <span class="anticon">{{ nickName }}</span>
    </span>
    <template #overlay>
      <a-menu>
        <a-menu-item key="person">
          <template #icon>
            <UserOutlined />
          </template>
          <RouterLink to="/person">
            {{ "个人中心" }}
          </RouterLink>
        </a-menu-item>
        <a-menu-item key="logout" @click="logout">
          <template #icon>
            <LogoutOutlined />
          </template>
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<style scoped lang="less">
.roleMenu {
  &:hover {
    .anticon-swap {
      color: #1677ff;
    }
  }
}
</style>
