import Request, { Data } from '@/utils/request'

/**
 * 登录
*/
export const login = (data:Data):Request => {
  return Request.axiosInstance({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
*/
export const getUserInfo = ():Request => {
  return Request.axiosInstance({
    url: '/sys/profile',
    method: 'GET'
  })
}
