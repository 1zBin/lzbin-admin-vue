import type { UserInfo } from "@/types";
import type { MenuData } from "~@/layouts/basic-layout/typing";
import dynamicRoutes, { rootRoute } from "~@/router/dynamic-routes";
import { genRoutes } from "~@/router/generate-route";

export const useUserStore = defineStore(
  "user",
  () => {
    const routerData = shallowRef();
    const menuData = shallowRef<MenuData>([]);
    const userInfo = shallowRef<UserInfo>({});

    // 获取个人信息
    const getUserInfo = () => {
      return useGet("/user/info");
    };

    const setUserInfo = (value: UserInfo) => {
      console.log("setUserInfo", value);

      userInfo.value = value;
      console.log("userInfo", userInfo.value);
    };
    const removeUserInfo = () => (userInfo.value = {});

    const generateRoutes = async () => {
      // const menus = await getMenus(); // 获取菜单数据
      menuData.value = genRoutes(dynamicRoutes);

      const currentRoute = {
        ...rootRoute,
        children: [...dynamicRoutes],
      };

      return currentRoute;
    };

    const generateDynamicRoutes = async () => {
      const routerDatas = await generateRoutes();
      routerData.value = routerDatas;
      return routerDatas;
    };

    return {
      routerData,
      menuData,
      generateDynamicRoutes,
      userInfo,
      setUserInfo,
      removeUserInfo,
      getUserInfo,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: "userInfo",
          storage: localStorage,
          paths: ["userInfo"],
        },
      ],
    },
  }
);
