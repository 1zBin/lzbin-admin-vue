import dayjs from "dayjs";

enum STATUS {
  OFF = "0",
  RUNNING = "1",
  ONLINE = "2",
  ERROR = "3",
}

export default [
  {
    url: "/api/list/consult-list", // 请求地址
    method: "post",
    response: ({ body }: any) => {
      const dataList = [
        {
          id: 1,
          name: "第一个任务",
          callNo: 2000,
          desc: "一生那么短，遗忘又那么漫长",
          status: STATUS.ONLINE,
          updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
        },
        {
          id: 2,
          name: "Ant Design Vue",
          callNo: 200,
          desc: "有时，你必须进入别人的世界去发现自己的世界缺少什么",
          status: STATUS.OFF,
          updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
        },
        {
          id: 3,
          name: "Vue",
          callNo: 2010,
          desc: "一生那么短，遗忘又那么漫长",
          status: STATUS.ERROR,
          updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
        },
        {
          id: 4,
          name: "Vite",
          callNo: 20300,
          desc: "希望是件美丽的东西，也许是最好的东西",
          status: STATUS.ERROR,
          updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
        },
        {
          id: 5,
          name: "React",
          callNo: 2000,
          desc: "人并非生来就伟大，而是越活越伟大",
          status: STATUS.ONLINE,
          updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
        },
        {
          id: 6,
          name: "Antdv System",
          callNo: 2000,
          desc: "不管何时何地，做你想做的事永远都不嫌晚",
          status: STATUS.OFF,
          updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
        },
        {
          id: 7,
          name: "Webpack",
          callNo: 2000,
          desc: "你要一直不停地往前走，不然你不会知道生活还会给你什么",
          status: STATUS.ONLINE,
          updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
        },
      ];
      const data = dataList.filter((i) => {
        if (body.name) return body.name === i.name;
        else return true;
      });
      return {
        code: 200,
        msg: "获取成功",
        data: data,
      };
    },
  },
  {
    url: /\/api\/list\/(\d+)/, // 使用正则表达式匹配动态参数
    method: "delete",
    response: ({ url }: any) => {
      const id = url.match(/\/api\/list\/(\d+)/)?.[1]; // 提取动态参数
      // 你可以在这里根据 id 执行删除逻辑
      return {
        code: 200,
        msg: `删除成功，ID: ${id}`, // 返回删除的 ID
      };
    },
  },
];
