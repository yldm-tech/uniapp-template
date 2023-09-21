import { request } from '@/utils/http'

export const getCategoryTop = () => {
  return request<any[]>({
    method: 'GET',
    url: '/category/top',
  })
}

/**
 * 商品详情
 * @param id 商品id
 */
export const getGoodsById = (id: string) => {
  return request<any>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
