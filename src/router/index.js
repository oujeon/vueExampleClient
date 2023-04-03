import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import VariableView from "../views/VariableView.vue";
import MethodView from "../views/MethodView.vue";
import DataBindingView from "../views/DataBindingView.vue";
import EventView from "../views/EventView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/variable",
    name: "variable",
    component: VariableView,
  },
  {
    path: "/method",
    name: "method",
    component: MethodView,
  },
  {
    path: "/dataBinding",
    name: "dataBinding",
    component: DataBindingView,
  },
  {
    path: "/eventView",
    name: "eventView",
    component: EventView,
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
