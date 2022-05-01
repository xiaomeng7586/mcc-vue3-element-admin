import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import './styles/index.scss'
import installIcons from './icons'
import Request from './utils/request'
import VueAxios from 'vue-axios'

const app = createApp(App)
installIcons(app)
app.use(store).use(router).use(VueAxios, Request.init()).use(ElementPlus, { locale }).mount('#app')
