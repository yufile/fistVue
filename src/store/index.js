import { createStore } from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

export default createStore({
  state: {
    currList: []
  },
  mutations,
  actions,
  getters,
  modules: {
  }
})
