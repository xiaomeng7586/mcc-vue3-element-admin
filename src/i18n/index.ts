import { createI18n } from 'vue-i18n'
import enLocale from './lang/en'
import zhLocale from './lang/zh'
import store from '@/store'
const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}

const getLanguage = ():string => {
  return store && store.getters && store.getters.language
}

const i18n = createI18n({
  // 使用compositionAPI
  legacy: false,
  // 全局使用t函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
