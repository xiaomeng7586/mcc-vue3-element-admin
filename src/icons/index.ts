import SvgIcon from '@/components/SvgIcon/index.vue'
import { App } from 'vue'
const svgRequire = require.context('./svg', false, /\.svg$/)
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))
export default (app:App):App => {
  return app.component('svg-icon', SvgIcon)
}
