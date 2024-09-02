import type { RouteRecordRaw } from "vue-router";
export const ROOT_ROUTE_REDIRECT_PATH = "/dashboard";
const Layout = () => import("@/layouts/index.vue");
const basicRouteMap = {
  // iframe模式下使用
  Iframe: () => import("@/pages/common/iframe.vue"),
  // 一般用于存在子集的页面
  RouteView: () => import("@/pages/common/route-view.vue"),
};
export const rootRoute: RouteRecordRaw = {
  path: "/",
  name: "rootPath",
  redirect: ROOT_ROUTE_REDIRECT_PATH,
  component: Layout,
  children: [],
};

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
] as RouteRecordRaw[];
