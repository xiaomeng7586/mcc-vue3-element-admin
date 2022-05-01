import Request from '@/utils/request'

interface Data {
  [k:string]:unknown
}

export const login = (data:Data):Request => {
  return Request.axiosInstance({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
