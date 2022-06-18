import HomeComp from "./components/HomeComp.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/LoginComp.vue";
import AddRestaurant from "./components/AddRestaurant.vue";
import UpdateRestaurant from "./components/UpdateRestaurant.vue"

const routes = [
  {
    name: "HomeComp",
    component: HomeComp,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "login",
    component: Login,
    path: "/login",
  },
  {
    name: "add",
    component: AddRestaurant,
    path: "/add",
  },
  {
    name: "update",
    component: UpdateRestaurant,
    path: "/update/:id",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
