import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import './styles/index.scss'
import installIcons from './icons'
import Request from './utils/request'
import VueAxios from 'vue-axios'
import i18n from '@/i18n'
import './permission'

const app = createApp(App)
installIcons(app)
app.use(store).use(router).use(i18n).use(VueAxios, Request.init()).use(ElementPlus, {
  locale: store.getters.language === 'en' ? en : zhCn
}).mount('#app')
