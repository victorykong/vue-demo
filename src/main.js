import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.use(Vuex);

import store from "./vuex/store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store: new Vuex.Store(store),
}).$mount("#app");
