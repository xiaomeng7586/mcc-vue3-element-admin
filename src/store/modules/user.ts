import { login } from '@/api/sys'
import md5 from 'md5'
import { getItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constance'
interface ResData {
  [k:string]:any
}
export default {
  namespace: true,
  state: ():any => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken (context:ResData, value:ResData):void {
      context.token = value
      setItem(TOKEN, value)
    }
  },
  actions: {
    login (context:ResData, userInfo:ResData):any {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then((res:any) => {
          context.commit('setToken', res.token)
          resolve(res)
        }).catch((error:any) => {
          reject(error)
        })
      })
    }
  }
}
