import { MAIN_COLOR, DEFAULT_COLOR } from '@/constance'
import { getItem, setItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: ():any => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR
  }),
  mutations: {
    setMainColor (state:any, color:string):void {
      state.mainColor = color
      setItem(MAIN_COLOR, color)
    }
  }
}
