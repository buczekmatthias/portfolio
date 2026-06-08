import { createRouter, createWebHistory } from "vue-router";

import Homepage from "@/pages/Homepage.vue";
import Project from "@/pages/Project.vue";

const routes = [
  { path: "/", component: Homepage, name: "home" },
  { path: "/projects/:project", component: Project, name: "projects.show" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return { top: 0, behavior: "smooth" };
  },
});
