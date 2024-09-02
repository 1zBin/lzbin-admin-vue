import { theme } from "ant-design-vue";

export const useAntdToken = createSharedComposable(() => {
  const { token } = theme.useToken();
  return token;
});
