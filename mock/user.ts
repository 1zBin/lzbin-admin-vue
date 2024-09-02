function createUserList() {
  return [
    {
      userId: 1,
      userName: "admin", // 用户名
      password: "123456", // 用户密码
      token: "Admin Token",
      userInfo: {
        avatar: "@/assets/images/errorUserAvatar.png", // 头像
        nickName: "管理员", // 用户名
      },
    },
    {
      userId: 2,
      userName: "test", // 用户名
      password: "123456", // 用户密码
      token: "Test Token",
      userInfo: {
        avatar: "@/assets/images/errorUserAvatar.png", // 头像
        nickName: "测试用户", // 用户名
      },
    },
  ];
}

export default [
  // 用户登录假接口
  {
    url: "/api/user/login", // 请求地址
    method: "post",
    response: ({ body }) => {
      // 获取请求体鞋带过来的用户名与密码
      const { userName, password } = body;

      // 调用获取用户信息的函数，用于判断是否有此用户
      const userInfo = createUserList().find(
        (item) => item.userName === userName && item.password === password
      );

      // 返回失败信息
      if (!userInfo) {
        return { code: 201, data: { message: " 账号或密码不正确 " } };
      }

      // 返回成功信息
      const { token } = userInfo;
      return { code: 200, data: { token } };
    },
  },

  // 获取用户信息假接口
  {
    url: "/api/user/info", // 请求地址
    method: "get",
    response: (request) => {
      // 获取请求头携带的 token
      const token = request.headers.token;

      // 查看用户信息是否包含有次token用户
      const userInfo = createUserList().find((item) => item.token === token);

      // 返回失败信息
      if (!userInfo) {
        return { code: 201, data: { message: " 获取用户信息失败 " } };
      }

      // 返回成功信息
      return { code: 200, data: { userInfo } };
    },
  },
];
