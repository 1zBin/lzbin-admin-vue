import { defineStore } from "pinia";
import { useToken, useUserStore } from "@/stores";
import router from "@/router";

export const useLogout = defineStore("logout", () => {
  const { removeUserInfo } = useUserStore();
  const { removeToken } = useToken();

  const logoutFn = () => {
    removeUserInfo();
    removeToken();

    router.push("Login");
  };
  return {
    logoutFn,
  };
});
