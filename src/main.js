import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import GlobalComponents from "./components/GlobalComponents.vue";

Vue.component("GlobalComponents", GlobalComponents);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
