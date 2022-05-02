import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckoutTimeStamp } from './auth'

export interface Data {
  [k:string]:any
}
export default class Request {
  [x: string]: any
  public static axiosInstance: AxiosInstance

  public static init ():AxiosInstance {
    this.axiosInstance = axios.create({
      baseURL: process.env.VUE_APP_BASE_API,
      timeout: 5000
    })
    this.initInterceptors()
    return axios
  }

  public static initInterceptors ():void {
    /**
     * 设置请求头
    */
    this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

    /**
     * 请求拦截器
    */
    this.axiosInstance.interceptors.request.use(
      (config:AxiosRequestConfig) => {
        (config as any).headers.icode = 'F38D6BD18E2F7AD6'
        if (store.getters.token) {
          // 判断是否过期
          if (isCheckoutTimeStamp()) {
            store.dispatch('logout')
            return Promise.reject(new Error('Token失效'))
          }
          // Authorization
          (config as any).headers.Authorization = `Bearer ${store.getters.token}`
        }
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )

    /**
     * 响应拦截器
    */
    this.axiosInstance.interceptors.response.use(
      (response:AxiosResponse) => {
        console.log('response', response)
        const { success, message, data } = response.data
        if (success) {
          return data
        } else {
          ElMessage.error(message)
          return Promise.reject(new Error(message))
        }
      },
      (error:any) => {
        ElMessage.error(error.message)
        return Promise.reject(new Error(error))
      }
    )
  }

  /**
   * http握手错误
   * @param res 响应回调,根据不同响应进行不同操作
   */
  private static errorHandle (res: any) {
    // 状态码判断
    switch (res.status) {
      case 401:
        break
      case 403:
        break
      case 404:
        // message.warn('请求的资源不存在'),
        console.log('请求的资源不存在')
        break
      default:
        // message.warn('连接错误')
        console.log('连接错误')
    }
  }
}
