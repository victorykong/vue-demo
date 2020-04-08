export default {
  namespaced: true,
  state: {
    count: 3,
  },
  getters: {},
  mutations: {
    increment(state) {
      // console.log("store2", state);
      // state => store2.state
      state.count++;
    },
  },
  actions: {},
};
