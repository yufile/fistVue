export function antiShake(fun,wait) {
  let timer = null
  return function (...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      fun(...args)
    },wait)
  }
}
