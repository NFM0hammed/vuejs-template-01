import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import AboutView from "../views/AboutView";
import WhyusView from "../views/WhyusView.vue";
import TeamView from "../views/TeamView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/whyus",
    name: "whyus",
    component: WhyusView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
