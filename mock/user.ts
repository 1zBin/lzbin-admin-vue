function createLoginList() {
  return [
    {
      username: "admin", // 用户名
      password: "admin", // 密码
      type: "account", // 登录类型
      token: "admin-token",
    },
    {
      mobile: "12345678901",
      code: "123456",
      type: "mobile",
      token: "admin-token",
    },
  ];
}

function createUserList() {
  return [
    {
      id: 1,
      username: "Admin",
      nickname: "管理员",
      avatar: "@/assets/vue.svg",
      roles: [],
      token: "admin-token",
    },
    {
      id: 2,
      username: "Test",
      nickname: "测试账号",
      avatar: "@/assets/vue.svg",
      roles: [],
      token: "test-token",
    },
  ];
}

export default [
  // 用户登录假接口
  {
    url: "/api/login", // 请求地址
    method: "post",
    response: ({ body }: any) => {
      // 获取请求体鞋带过来的用户名与密码
      const { username, password } = body;

      // 调用获取用户信息的函数，用于判断是否有此用户
      const loginData = createLoginList().find(
        (item) => item.username === username && item.password === password
      );

      // 返回失败信息
      if (!loginData) {
        return { code: 201, data: { message: " 账号或密码不正确 " } };
      }

      // 返回成功信息
      return { code: 200, data: loginData };
    },
  },

  // 获取用户信息假接口
  {
    url: "/api/user/info", // 请求地址
    method: "get",
    response: (_request: any) => {
      // 获取请求头携带的 token
      // const token = request.headers.Authorization;

      // 查看用户信息是否包含有次token用户
      const userInfo = createUserList().find(
        (item) => item.token === "admin-token"
      );

      // 返回失败信息
      if (!userInfo) {
        return { code: 201, data: { message: " 获取用户信息失败 " } };
      }

      // 返回成功信息
      return { code: 200, data: { userInfo } };
    },
  },
];
