import router from "@/router";
import { useToken, useUserStore } from "@/stores";
import type { EmailParams, LoginParams, LoginResult } from "@/types";
import { defineStore } from "pinia";

export const useLogin = defineStore("login", () => {
  // 注册账号
  const registerFn = (params: EmailParams) => {
    return usePost<EmailParams>("/user/signUp", params);
  };
  // 登录
  const loginFn = async (params: LoginParams, type: string) => {
    let res;
    if (type === "account") {
      res = await usePost<LoginResult, LoginParams>("/user/login", params);
    } else if (type === "mobile") {
      // res = await usePost<LoginResult, LoginParams>(
      //   "/login/signInBySms",
      //   params
      // );
    }

    // 登录成功后
    console.log("登录成功", res);

    if (res?.data.code === 200) {
      const { updateToken } = useToken();
      const { setUserInfo, getUserInfo } = useUserStore();
      // 保存登录的时间戳
      localStorage.setItem("loginTime", Date.now().toString());
      updateToken(res.data.data.token);
      const result = await getUserInfo();
      setUserInfo(result.data.data.userInfo);
      // 跳转到首页
      router.push("/");
    }
    return res;
  };

  // 获取短信验证码
  const sendSms = (params: { phone: string }) => {
    return usePost<any, any>("/sms/sendSms", params);
  };
  return {
    loginFn,
    registerFn,
    sendSms,
  };
});
