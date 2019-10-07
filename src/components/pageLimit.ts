const LIMIT = 5

/**
 * 总数最大页数限制  
 * 算法：列表找规律——总数、最大页数、总数对每页数量，就可以发现
 * @param count 总数
 * @returns 最大分页
 */
const pageLimit = (count: number) => {
  /** 处理负数 设为0 */
  let c = count >= 0 ? count : 0
  return Math.floor((c - 1) / LIMIT) + 1
}

/**
 * 修正当前页  
 * 返回限制最大数值的页面
 * @param page 当前分页
 * @param count 总数
 * @returns 当前分页 超过最大分页时显示为最大分页
 */
export const limitPage = (page: number, count: number) => {
  let pageLimitNumber = pageLimit(count)
  return page <= pageLimitNumber ? page : pageLimitNumber
}