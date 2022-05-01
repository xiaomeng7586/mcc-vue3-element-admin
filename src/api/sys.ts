import Request, { Data } from '@/utils/request'

export const login = (data:Data):Request => {
  return Request.axiosInstance({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
