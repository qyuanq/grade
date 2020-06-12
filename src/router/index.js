import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import Index from "../views/index.vue";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/register.vue")
    component: Register
  },
  {
    path: "/index",
    name: "index",
    component: Index
  },
  {
    path: "/rank",
    name: "rank",
    component: () => 
      import("../views/rank.vue")
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
