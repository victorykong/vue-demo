import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import App from "./App4.vue";

// import App from "./App3.vue";
// import App from "./App.vue";
// import App from "./App2.vue";
// import store from "./vuex/store";
// import store from "./vuex/module";
import routerInstance from "./router/router";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

// console.log(Vue.version)

// 全局混入 mixin
// Vue.mixin({
//   created() {
//     console.log("Global ==> mixin log!");
//   }
// });

new Vue({
  render: h => h(App),
  // store: new Vuex.Store(store),
  router: routerInstance // 路由实例
}).$mount("#app");
