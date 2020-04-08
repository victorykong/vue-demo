export default {
  namespaced: true,
  state: {
    count: 2,
  },
  getters: {},
  mutations: {
    increment(state) {
      /**
       * state 的指向一直都相同, 但是如果不添加 namespaced && mapMutations 的话, 会互相影响
       */
      //   console.log("store1", state);
      // state => store1.state
      state.count++;
    },
  },
  actions: {},
};
