import { Store } from 'vuex'
import { login } from '@/api/sys'
import md5 from 'md5'
export default {
  namespace: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login (context:any, userInfo:any) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then((res:any) => {
          resolve(res)
        }).catch((error:any) => {
          reject(error)
        })
      })
    }
  }
}
