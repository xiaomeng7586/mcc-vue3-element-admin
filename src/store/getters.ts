import { MAIN_COLOR } from '@/constant'
import { getItem } from '@/utils/storage'

import { generateColors } from '@/utils/theme'
const getters = {
  token: (state:any) => state.user.token,
  hasUserInfo: (state:any) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state:any) => state.user.userInfo,
  cssvar: (state:any) => ({
    ...state.theme.variables,
    ...generateColors(getItem(MAIN_COLOR))
  }),
  sidebarOpened: (state:any) => state.app.sidebarOpened,
  language: (state:any) => state.app.language,
  mainColor: (state:any) => state.theme.mainColor
}
export default getters
