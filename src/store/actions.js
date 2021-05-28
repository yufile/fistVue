import {ADD_CART_TO,ADD_COUNT,DEL_CART} from "@/store/mutations_type";

export default {
  cartAdd(context,payload) {
   return new Promise((resolve, reject) => {
      let oldProdu = context.state.currList.find(item => item.iid === payload.iid);
      if(oldProdu) { // 数量加1
        context.commit(ADD_COUNT,oldProdu)
        resolve('数量加一')
      }else {
        payload.count = 1;
        payload.checked = true
        context.commit(ADD_CART_TO,payload)
        resolve('添加商品成功')
      }
    })
  },
  delCart(context,payload) {
    context.commit(DEL_CART,payload)
  }
}
