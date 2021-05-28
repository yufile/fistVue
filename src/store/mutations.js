import {
  ADD_CART_TO,
  ADD_COUNT,
  DEL_CART
} from "@/store/mutations_type";


export default {
  [ADD_COUNT](state,payload) {
    payload.count++
  },
  [ADD_CART_TO](state,payload) {
    state.currList.push(payload)
  },
  [DEL_CART](state,payload) {
    let list = state.currList.find(item => {
      return item.iid === payload
    })
    state.currList.splice(list,1)
  }
}
