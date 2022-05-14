import i18n from '@/i18n'
interface Callback {
  (value?:any):any
}
export const passwordValidate = ():unknown => {
  return (rule:unknown, value:string, callback:Callback) => {
    if (value.length < 6) {
      callback(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
