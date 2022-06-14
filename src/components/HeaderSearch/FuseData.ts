import i18n from '@/i18n'
import path from 'path'
/**
 * 筛选出可供搜索的路由对象
 * @param routes 路由表
 * @param basePath 基础路径，默认为 /
 * @param prefixTitle
 *
*/
interface SearchData {
  path: string
  title:string[]
}
export const generateRoutes = (routes:any[], basePath = '/', prefixTitle:string[] = []):SearchData[] => {
  // 创建result数据
  let res:SearchData[] = []

  for (const route of routes) {
    const data:SearchData = {
      path: path.resolve(basePath, route.path),
      title: [...prefixTitle]
    }

    // 当前存在meta时，使用i18n进行国际化解析，组合成新的title
    // 动态路由不允许被检索
    // 正则
    const re = /.*\/:.*/
    if (route.meta && route.meta.title && !re.exec(route.path)) {
      const i18nTitle = i18n.global.t(`msg.route.${route.meta.title}`)
      data.title = [...data.title, i18nTitle]
      res.push(data)
    }

    // 存在children时，迭代处理
    if (route.children) {
      const tempRoutes = generateRoutes(route.children, data.path, data.title)
      res = [...res, ...tempRoutes]
    }
  }
  return res
}
