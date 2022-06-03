import { TIME_STAMP, TIMEOUT_VALUE } from '@/constant'
import { setItem, getItem } from './storage'

/**
 * 获取时间戳
*/
export function getTimeStamp ():number {
  return getItem(TIME_STAMP)
}

/**
 * 设置时间戳
*/
export function setTimeStamp ():void {
  setItem(TIME_STAMP, Date.now())
}

/**
 * 查看是否过期
*/
export function isCheckoutTimeStamp ():boolean {
  const currentTime = getTimeStamp()
  const timeStamp = Date.now()
  return timeStamp - currentTime > TIMEOUT_VALUE
}
