<script setup lang="ts">
import { LogoutOutlined, ProfileOutlined } from "@ant-design/icons-vue";

const { t } = useI18nLocale();
const message = useMessage();
const userStore = useUserStore();
const multiTabStore = useMultiTab();
const layoutMenuStore = useLayoutMenu();
const router = useRouter();
const { avatar, nickname } = storeToRefs(userStore);
async function handleClick({ key }: any) {
  if (key === "logout") {
    const hide = message.loading("退出登录...", 0);
    try {
      await userStore.logout();
    } finally {
      hide();
      message.success("退出登录成功", 3);
      router
        .push({
          path: "/login",
        })
        .then(() => {
          multiTabStore.clear();
          layoutMenuStore.clear();
        });
    }
  }
}
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
      <a-avatar :src="avatar" mr-8px size="small" />
      <span class="anticon">{{ nickname }}</span>
    </span>
    <template #overlay>
      <a-menu @click="handleClick">
        <a-menu-item key="account-settings">
          <template #icon>
            <ProfileOutlined />
          </template>
          <RouterLink to="/account/settings">
            {{ t("menu.account.settings") }}
          </RouterLink>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="logout">
          <template #icon>
            <LogoutOutlined />
          </template>
          {{ t("menu.account.logout") }}
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
