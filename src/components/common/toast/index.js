import Toast from "@/components/common/toast/Toast";
const obj = {}

obj.install = function (vue) {
  /*console.log('----',vue)*/
  const toastConstructor = vue.extend(Toast);
  const toast = new toastConstructor();
  toast.mount(document.createElement('div'))
  document.body.appendChild(toast.$el)

  vue.prototype.$toast = Toast
}
export  default obj
