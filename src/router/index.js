import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import VariableView from "../views/VariableView.vue";
import MethodView from "../views/MethodView.vue";
import OneWayDataBindingView from "../views/OneWayDataBindingView.vue";
import EventView from "../views/EventView.vue";
import TwoWayDataBindingView from "../views/TwoWayDataBindingView.vue";
import ComputedView from "../views/ComputedView.vue";
import WatchView from "../views/WatchView.vue";
import ClassStyleView from "../views/ClassStyleView.vue";
import vIfShowView from "../views/vIfShowView.vue";
import vForView from "../views/vForView.vue";
import ViewComponentView from "../views/ViewComponentView.vue";
import PropsParentView from "../views/PropsParentView.vue";
import EmitParentView from "../views/EmitParentView.vue";
import SlotParentView from "../views/SlotParentView.vue";
import ToDoView from "../views/ToDoView.vue";
import VuexView from "../views/VuexView.vue";

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
    path: "/oneWayDataBinding",
    name: "oneWayDataBinding",
    component: OneWayDataBindingView,
  },
  {
    path: "/eventView",
    name: "eventView",
    component: EventView,
  },
  {
    path: "/twoWayDataBinding",
    name: "twoWayDataBinding",
    component: TwoWayDataBindingView,
  },
  {
    path: "/computed",
    name: "computed",
    component: ComputedView,
  },
  {
    path: "/watch",
    name: "watch",
    component: WatchView,
  },
  {
    path: "/classStyle",
    name: "classStyle",
    component: ClassStyleView,
  },
  {
    path: "/vIfShow",
    name: "vIfShow",
    component: vIfShowView,
  },
  {
    path: "/vFor",
    name: "vFor",
    component: vForView,
  },
  {
    path: "/viewComponent",
    name: "viewComponent",
    component: ViewComponentView,
  },
  {
    path: "/propsParent",
    name: "propsParent",
    component: PropsParentView,
  },
  {
    path: "/emitParent",
    name: "emitParent",
    component: EmitParentView,
  },
  {
    path: "/slotParent",
    name: "slotParent",
    component: SlotParentView,
  },
  {
    path: "/toDo",
    name: "toDo",
    component: ToDoView,
  },
  {
    path: "/vuex",
    name: "vuex",
    component: VuexView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
