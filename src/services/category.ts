import type { CategoryTopItem, GoodsResult } from '@/types/category'
import { request } from '@/utils/http.util'

export const getCategoryTop = () => {
  return request<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}

/**
 * 商品详情
 * @param id 商品id
 */
export const getGoodsById = (id: string) => {
  return request<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
