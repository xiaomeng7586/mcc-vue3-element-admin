import { LANG } from '@/constance'
import { getItem, setItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: ():any => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    triggerSidebarOpend (state:any):void {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage (state:any, lang:string):void {
      setItem(LANG, lang)
      state.language = lang
    }
  }
}
