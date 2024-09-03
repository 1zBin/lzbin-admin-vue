import type { CommonPageData, CommonTableResult } from "@/types";

// 分页获取列表数据
export const getAdvancedList = (params: CommonPageData) => {
  return usePost<CommonTableResult, CommonPageData>(
    "/list/advanced-list",
    params
  );
};

export async function deleteApi(id: string | number) {
  return useDelete(`/list/${id}`);
}
