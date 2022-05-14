import variables from '@/styles/variables.scss'
const getters = {
  token: (state:any) => state.user.token,
  hasUserInfo: (state:any) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state:any) => state.user.userInfo,
  cssvar: (state:any) => variables,
  sidebarOpened: (state:any) => state.app.sidebarOpened,
  language: (state:any) => state.app.language
}
export default getters
