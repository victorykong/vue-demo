import VueRouter from "vue-router";

import router1 from "../components/VueRouter/router1.vue";
import router2 from "../components/VueRouter/router2.vue";

const routes = [
  { path: "/router1", component: router1 },
  { path: "/router2", component: router2 },
];

// 创建实例
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
