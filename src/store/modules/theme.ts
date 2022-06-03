import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
import variables from '@/styles/variables.scss'
export default {
  namespaced: true,
  state: ():any => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
    variables: variables
  }),
  mutations: {
    setMainColor (state:any, color:string):void {
      state.mainColor = color
      state.variables.menuBg = color
      setItem(MAIN_COLOR, color)
    }
  }
}
