import type { RouteRecordRaw } from "vue-router";
import { basicRouteMap } from "./router-modules";

export default [
  {
    path: "/dashboard",
    redirect: "/dashboard/analysis",
    name: "Dashboard",
    meta: {
      title: "仪表盘",
      icon: "DashboardOutlined",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/dashboard/analysis",
        name: "DashboardAnalysis",
        component: () => import("~/pages/dashboard/analysis/index.vue"),
        meta: {
          title: "分析页",
        },
      },
      {
        path: "/dashboard/monitor",
        name: "DashboardMonitor",
        component: () => import("~/pages/dashboard/monitor/index.vue"),
        meta: {
          title: "监控页",
        },
      },
      {
        path: "/dashboard/workplace",
        name: "DashboardWorkplace",
        component: () => import("~/pages/dashboard/workplace/index.vue"),
        meta: {
          title: "工作台",
        },
      },
    ],
  },
  {
    path: "/form",
    redirect: "/form/basic-form",
    name: "Form",
    meta: {
      title: "表单页",
      icon: "FormOutlined",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/form/basic-form",
        name: "FormBasic",
        component: () => import("~/pages/form/basic-form/index.vue"),
        meta: {
          title: "基础表单",
          locale: "menu.form.basic-form",
        },
      },
      {
        path: "/form/step-form",
        name: "FormStep",
        component: () => import("~/pages/form/step-form/index.vue"),
        meta: {
          title: "分步表单",
          locale: "menu.form.step-form",
        },
      },
      {
        path: "/form/advanced-form",
        name: "FormAdvanced",
        component: () => import("~/pages/form/advanced-form/index.vue"),
        meta: {
          title: "高级表单",
          locale: "menu.form.advanced-form",
        },
      },
    ],
  },
  {
    path: "/profile",
    name: "profile",
    redirect: "/profile/basic",
    meta: {
      title: "menu.profile",
      icon: "ProfileOutlined",
      locale: "menu.profile",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/profile/basic",
        name: "ProfileBasic",
        component: () => import("~/pages/profile/basic/index.vue"),
        meta: {
          title: "menu.profile.basic",
          locale: "menu.profile.basic",
        },
      },
    ],
  },
  {
    path: "/exception",
    redirect: "/exception/403",
    name: "Exception",
    meta: {
      title: "异常页",
      icon: "WarningOutlined",
      locale: "menu.exception",
    },
    children: [
      {
        path: "/exception/403",
        name: "Exception403",
        component: () => import("~/pages/exception/403.vue"),
        meta: {
          title: "403",
          locale: "menu.exception.not-permission",
        },
      },
      {
        path: "/exception/404",
        name: "Exception404",
        component: () => import("~/pages/exception/404.vue"),
        meta: {
          title: "404",
          locale: "menu.exception.not-find",
        },
      },
      {
        path: "/exception/500",
        name: "Exception500",
        component: () => import("~/pages/exception/500.vue"),
        meta: {
          title: "500",
          locale: "menu.exception.server-error",
        },
      },
    ],
  },
  // 结果页
  {
    path: "/result",
    redirect: "/result/success",
    name: "Result",
    meta: {
      title: "结果页",
      icon: "CheckCircleOutlined",
      locale: "menu.result",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/result/success",
        name: "ResultSuccess",
        component: () => import("~/pages/result/success.vue"),
        meta: {
          title: "成功页",
          locale: "menu.result.success",
        },
      },
      {
        path: "/result/fail",
        name: "ResultFail",
        component: () => import("~/pages/result/fail.vue"),
        meta: {
          title: "失败页",
          locale: "menu.result.fail",
        },
      },
    ],
  },
  {
    path: "/list",
    redirect: "/list/card-list",
    name: "List",
    meta: {
      title: "列表页",
      icon: "TableOutlined",
      locale: "menu.list",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/list/card-list",
        name: "CardList",
        component: () => import("~/pages/list/card-list.vue"),
        meta: {
          title: "卡片列表",
          locale: "menu.list.card-list",
        },
      },
      {
        path: "/list/table-list",
        name: "ConsultTable",
        component: () => import("~/pages/list/table-list.vue"),
        meta: {
          title: "查询表格",
          locale: "menu.list.consult-table",
        },
      },
      {
        path: "/list/crud-table",
        name: "CrudTable",
        component: () => import("~/pages/list/crud-table.vue"),
        meta: {
          title: "增删改查表格",
          locale: "menu.list.crud-table",
        },
      },
      {
        path: "/list/basic-list",
        name: "BasicList",
        component: () => import("~/pages/list/basic-list.vue"),
        meta: {
          title: "标准列表",
          locale: "menu.list.basic-list",
        },
      },
      {
        path: "/list/search-list",
        name: "SearchList",
        component: () => import("~/pages/list/search-list/index.vue"),
        meta: {
          title: "搜索列表",
          locale: "menu.list.search-list",
        },
        redirect: "/list/search-list/articles",
        children: [
          {
            path: "/list/search-list/articles",
            name: "SearchListArticles",
            component: () => import("~/pages/list/search-list/articles.vue"),
            meta: {
              title: "搜索列表（文章）",
              locale: "menu.list.search-list.articles",
            },
          },
          {
            path: "/list/search-list/projects",
            name: "SearchListProjects",
            component: () => import("~/pages/list/search-list/projects.vue"),
            meta: {
              title: "搜索列表（项目）",
              locale: "menu.list.search-list.projects",
            },
          },
          {
            path: "/list/search-list/applications",
            name: "SearchListApplications",
            component: () =>
              import("~/pages/list/search-list/applications.vue"),
            meta: {
              title: "搜索列表（应用）",
              locale: "menu.list.search-list.applications",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/account",
    redirect: "/account/center",
    name: "Account",
    meta: {
      title: "个人页",
      icon: "UserOutlined",
      locale: "menu.account",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/account/settings",
        name: "AccountSettings",
        component: () => import("~/pages/account/settings.vue"),
        meta: {
          title: "个人设置",
          locale: "menu.account.settings",
        },
      },
    ],
  },
  {
    path: "/orther",
    redirect: "/orther/drag",
    name: "Orther",
    meta: {
      title: "其他组件",
      icon: "UserOutlined",
      locale: "menu.orther",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/orther/drag",
        name: "OrtherDrag",
        component: () => import("~/pages/orther/drag/index.vue"),
        meta: {
          title: "拖拽",
          locale: "menu.orther.drag",
        },
      },
    ],
  },
] as RouteRecordRaw[];
