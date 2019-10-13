const LIMIT = 5

/**
 * 总数最大页数限制  
 * 算法：列表找规律——总数、最大页数、总数对每页数量，就可以发现
 * @param count 总数
 * @param limit 每页数目
 * @returns 最大分页
 */
const pageLimit = (count: number, limit = LIMIT) => {
  let t = Math.floor((count - 1) / limit) + 1
  /** 分页最小设为1 */
  return t >= 1 ? t : 1
}

/**
 * 修正当前页  
 * 返回限制最大数值的页面
 * @param page 当前分页
 * @param count 总数
 * @param limit 每页数目
 * @returns 当前分页 超过最大分页时显示为最大分页
 */
export const limitPage = (page: number, count: number, limit = LIMIT) => {
  let pageLimitNumber = pageLimit(count, limit)
  return page <= pageLimitNumber ? page : pageLimitNumber
}