declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.json' {
  const value: any
  export default value
}
declare module 'css-color-function'
declare interface DataMap {
  [key:string]:any
}

declare module 'screenfull' {
  export const isFullscreen:boolean
  export function on(x:string, ...args):void
  export function off(x:string, ...args):void
  export function toggle(...args):void
}
