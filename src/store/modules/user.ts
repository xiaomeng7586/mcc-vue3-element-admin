import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { getItem, setItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constance'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'
interface ResData {
  [k:string]:any
}
export default {
  namespace: true,
  state: ():any => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken (context:ResData, value:ResData):void {
      context.token = value
      setItem(TOKEN, value)
    },
    setUserInfo (context:ResData, userInfo:ResData):void {
      context.userInfo = userInfo
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
          // 登录后跳转
          router.push('/')
          // 设置时间戳
          setTimeStamp()
          resolve(res)
        }).catch((error:any) => {
          reject(error)
        })
      })
    },
    async getUserInfo (context:ResData):Promise<any> {
      const res = await getUserInfo()
      context.commit('setUserInfo', res)
      return res
    },
    logout (context:ResData):void {
      context.commit('setToken', '')
      context.commit('setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
