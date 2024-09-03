function createMenuList() {
  return [
    {
      id: 1,
      parentId: null,
      title: "仪表盘",
      icon: "DashboardOutlined",
      component: "RouteView",
      redirect: "/dashboard/analysis",
      path: "/dashboard",
      name: "Dashboard",
      locale: "menu.dashboard",
    },
    {
      id: 3,
      parentId: null,
      title: "表单页",
      icon: "FormOutlined",
      component: "RouteView",
      redirect: "/form/basic",
      path: "/form",
      name: "Form",
      locale: "menu.form",
    },
    {
      id: 19,
      parentId: null,
      title: "异常页",
      icon: "WarningOutlined",
      component: "RouteView",
      redirect: "/exception/403",
      path: "/exception",
      name: "Exception",
      locale: "menu.exception",
    },
    {
      id: 20,
      parentId: 19,
      path: "/exception/403",
      title: "403",
      name: "403",
      component: "/exception/403",
      locale: "menu.exception.not-permission",
    },
    {
      id: 21,
      parentId: 19,
      path: "/exception/404",
      title: "404",
      name: "404",
      component: "/exception/404",
      locale: "menu.exception.not-find",
    },
    {
      id: 22,
      parentId: 19,
      path: "/exception/500",
      title: "500",
      name: "500",
      component: "/exception/500",
      locale: "menu.exception.server-error",
    },
    {
      id: 23,
      parentId: null,
      title: "结果页",
      icon: "CheckCircleOutlined",
      component: "RouteView",
      redirect: "/result/success",
      path: "/result",
      name: "Result",
      locale: "menu.result",
    },
    {
      id: 24,
      parentId: 23,
      path: "/result/success",
      title: "成功页",
      name: "ResultSuccess",
      component: "/result/success",
      locale: "menu.result.success",
    },
    {
      id: 25,
      parentId: 23,
      path: "/result/fail",
      title: "失败页",
      name: "ResultFail",
      component: "/result/fail",
      locale: "menu.result.fail",
    },
    {
      id: 26,
      parentId: null,
      title: "列表页",
      icon: "TableOutlined",
      component: "RouteView",
      redirect: "/list/card-list",
      path: "/list",
      name: "List",
      locale: "menu.list",
    },
    {
      id: 27,
      parentId: 26,
      path: "/list/card-list",
      title: "卡片列表",
      name: "ListCard",
      component: "/list/card-list",
      locale: "menu.list.card-list",
    },
    {
      id: 28,
      parentId: null,
      title: "详情页",
      icon: "ProfileOutlined",
      component: "RouteView",
      redirect: "/profile/basic",
      path: "/profile",
      name: "Profile",
      locale: "menu.profile",
    },
    {
      id: 29,
      parentId: 28,
      path: "/profile/basic",
      title: "基础详情页",
      name: "ProfileBasic",
      component: "/profile/basic/index",
      locale: "menu.profile.basic",
    },
    {
      id: 30,
      parentId: 26,
      path: "/list/search-list",
      title: "搜索列表",
      name: "SearchList",
      component: "/list/search-list",
      locale: "menu.list.search-list",
    },
    {
      id: 31,
      parentId: 30,
      path: "/list/search-list/articles",
      title: "搜索列表（文章）",
      name: "SearchListArticles",
      component: "/list/search-list/articles",
      locale: "menu.list.search-list.articles",
    },
    {
      id: 32,
      parentId: 30,
      path: "/list/search-list/projects",
      title: "搜索列表（项目）",
      name: "SearchListProjects",
      component: "/list/search-list/projects",
      locale: "menu.list.search-list.projects",
    },
    {
      id: 33,
      parentId: 30,
      path: "/list/search-list/applications",
      title: "搜索列表（应用）",
      name: "SearchListApplications",
      component: "/list/search-list/applications",
      locale: "menu.list.search-list.applications",
    },
    {
      id: 34,
      parentId: 26,
      path: "/list/basic-list",
      title: "标准列表",
      name: "BasicCard",
      component: "/list/basic-list",
      locale: "menu.list.basic-list",
    },
    {
      id: 35,
      parentId: 28,
      path: "/profile/advanced",
      title: "高级详细页",
      name: "ProfileAdvanced",
      component: "/profile/advanced/index",
      locale: "menu.profile.advanced",
    },
    {
      id: 4,
      parentId: 3,
      title: "基础表单",
      component: "/form/basic-form/index",
      path: "/form/basic-form",
      name: "FormBasic",
      keepAlive: false,
      locale: "menu.form.basic-form",
    },
    {
      id: 36,
      parentId: null,
      title: "个人页",
      icon: "UserOutlined",
      component: "RouteView",
      redirect: "/account/center",
      path: "/account",
      name: "Account",
      locale: "menu.account",
    },
    {
      id: 37,
      parentId: 36,
      path: "/account/settings",
      title: "个人设置",
      name: "AccountSettings",
      component: "/account/settings",
      locale: "menu.account.settings",
    },
    {
      id: 38,
      parentId: 3,
      title: "分步表单",
      component: "/form/step-form/index",
      path: "/form/step-form",
      name: "FormStep",
      keepAlive: false,
      locale: "menu.form.step-form",
    },
    {
      id: 39,
      parentId: 3,
      title: "高级表单",
      component: "/form/advanced-form/index",
      path: "/form/advanced-form",
      name: "FormAdvanced",
      keepAlive: false,
      locale: "menu.form.advanced-form",
    },
    {
      id: 40,
      parentId: 26,
      path: "/list/table-list",
      title: "查询表格",
      name: "ConsultTable",
      component: "/list/table-list",
      locale: "menu.list.consult-table",
    },
    {
      id: 41,
      parentId: 1,
      title: "分析页",
      component: "/dashboard/analysis",
      path: "/dashboard/analysis",
      name: "DashboardAnalysis",
      keepAlive: true,
      locale: "menu.dashboard.analysis",
    },
    {
      id: 42,
      parentId: 1,
      title: "监控页",
      component: "/dashboard/monitor",
      path: "/dashboard/monitor",
      name: "DashboardMonitor",
      keepAlive: true,
      locale: "menu.dashboard.monitor",
    },
    {
      id: 43,
      parentId: 1,
      title: "工作台",
      component: "/dashboard/workplace",
      path: "/dashboard/workplace",
      name: "DashboardWorkplace",
      keepAlive: true,
      locale: "menu.dashboard.workplace",
    },
    {
      id: 44,
      parentId: 26,
      path: "/list/crud-table",
      title: "增删改查表格",
      name: "CrudTable",
      component: "/list/crud-table",
      locale: "menu.list.crud-table",
    },
    {
      id: 45,
      parentId: 9,
      path: "/menu/menu4",
      redirect: "/menu/menu4/menu1",
      title: "菜单2-1",
      component: "RouteView",
      locale: "menu.menu.menu4",
    },
    {
      id: 46,
      parentId: 45,
      path: "/menu/menu4/menu1",
      component: "/menu/menu-2-1/menu1",
      title: "菜单2-1-1",
      keepAlive: true,
      locale: "menu.menu4.menu1",
    },
    {
      id: 47,
      parentId: 45,
      path: "/menu/menu4/menu2",
      component: "/menu/menu-2-1/menu2",
      title: "菜单2-1-2",
      keepAlive: true,
      locale: "menu.menu4.menu2",
    },
  ];
}

export default [
  // 菜单假接口
  {
    url: "/api/menu", // 请求地址
    method: "get",
    response: () => {
      // 返回成功信息
      return { code: 200, data: createMenuList() };
    },
  },
];
