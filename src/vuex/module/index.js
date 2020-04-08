import store1 from "./store1";
import store2 from "./store2";

/**
 * 这里是一个 rootStore
 */
export default {
  namespace: true,
  modules: {
    store1,
    store2,
  },

  state: {
    count: 1,
  },
  getters: {},
  mutations: {
    increment(state) {
      // console.log("root", state);
      // state => root.state
      state.count++;
    },
  },
  actions: {},
};
