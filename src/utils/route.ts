const path = require('path')
declare interface MetaItem {
  icon?:string
  title?:string
}
declare interface RouteItem {
  path:string
  name:string
  children:Array<RouteItem>
  meta?:MetaItem
}
/**
 * 获取所有的子集路由
*/
const getChildrenRoutes = (routes:Array<RouteItem>) => {
  const result:Array<RouteItem> = []
  routes.forEach(route => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

/**
 * 处理脱离层级的路由
*/
export const filterRouters = (routes:Array<RouteItem>):Array<RouteItem> => {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter(route => {
    return !childrenRoutes.find(childrenRoute => {
      return childrenRoute.path === route.path
    })
  })
}

function isNull (data:any) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}

/**
 * 根据routes数据，返回对应的 menu 规则数据
*/
export const generateMenus = (routes:Array<RouteItem> = [], basePath = ''):Array<RouteItem> => {
  const result:Array<RouteItem> = []
  routes.forEach(item => {
    if (isNull(item.children) && isNull(item.meta)) return false
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children || []))
      return false
    }
    const routePath = path.resolve(basePath, item.path)
    let route = result.find(item => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (route.meta && route.meta.title && route.meta.icon) {
        result.push(route)
      }
    }
    if (!isNull(item.children)) {
      route.children && route.children.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}
