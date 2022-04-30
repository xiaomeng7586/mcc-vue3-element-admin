interface Callback {
  (value?:any):any
}
export const passwordValidate = ():unknown => {
  return (rule:unknown, value:string, callback:Callback) => {
    if (value.length < 6) {
      callback(new Error('密码不能小于6位'))
    } else {
      callback()
    }
  }
}
