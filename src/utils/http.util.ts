import { useMemberStore } from '@/stores'

const store = useMemberStore()
const baseUrl = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    // 请求地址
    if (!options.url?.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    // 超时时间
    options.timeout = 30 * 1000

    // 小程序端
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // Token
    const token = store.profile?.token
    if (token) {
      options.header.Authorization = `Bearer ${token}`
    }
  },
}

// 拦截器
uni.addInterceptor('request', httpInterceptor)

uni.addInterceptor('uploadFile', httpInterceptor)

interface Result<T> {
  code: number
  msg: string
  result: T
}

const http = <T>(options: UniApp.RequestOptions) => {
  const memberStore = useMemberStore()
  return new Promise<Result<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Result<T>)
        } else if (res.statusCode === 401) {
          memberStore.clearProfile()
          uni.navigateTo({
            url: '/pages/my/login',
          })
          reject(res)
        } else {
          uni.showToast({
            title: (res.data as Result<T>).msg || '请求失败',
            icon: 'none',
          })
          reject(res)
        }
      },
      fail(err) {
        // 网络错误
        uni.showToast({
          title: '网络错误',
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}

export const request = http
