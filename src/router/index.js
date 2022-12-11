import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import TermPrivacy from "../components/TermPrivacy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/register",
    name: "register",
    component: Register,
  },

  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },

  {
    path: "/termprivacy",
    nome: "TermPrivacy",
    component: TermPrivacy,
  },
  {
    path: "/reset-password/:token",
    nome: "ResetPassword",
    component: TermPrivacy,
  },
];

const router = new Router({ routes });

export default router;
