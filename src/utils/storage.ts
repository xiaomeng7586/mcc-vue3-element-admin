/**
 * 设置缓存
*/
export const setItem = (key:string, value:any):void => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

/**
 * 取出缓存
*/
export const getItem = (key:string):any => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse((data as any))
  } catch (err) {
    return data
  }
}

/**
 * 清除指定缓存
*/
export const removeItem = (key:string):void => {
  localStorage.removeItem(key)
}

/**
 * 清除所有缓存
*/
export const clearItem = () => {
  localStorage.clear()
}
