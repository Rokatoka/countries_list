import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import MainView from "@/views/MainView.vue";
import ItemView from "@/views/ItemView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/country/:name",
    name: "item",
    component: ItemView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
