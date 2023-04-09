import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
// import sampleModules from "./sampleModules";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    staToDo: [
      {
        id: 1,
        text: "buy a car",
        checked: true,
      },
      {
        id: 2,
        text: "play game",
        checked: false,
      },
      {
        id: 3,
        text: "any game",
        checked: false,
      },
    ],
    users: [],
  },
  getters: {
    GET_CNT(state) {
      return state.staToDo.length;
    },
  },
  mutations: {
    MUT_ADD_TODO(state, value) {
      state.staToDo.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
      this.datTemp = "";
    },
    MUT_TOGGLE_TODO(state, { id, checked }) {
      const index = state.staToDo.findIndex((item) => {
        return item.id === id;
      });
      state.staToDo[index].checked = checked;
    },
    MUT_DELETE_TODO(state, id) {
      // const index = this.datToDo.findIndex((item) => {
      //   return item.id === id;
      // });
      // this.datToDo.splice(index, 1);
      state.staToDo = state.staToDo.filter((item) => item.id !== id);
    },
    MUT_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    ACT_ADD_TODO({ commit }, value) {
      // axios 대신  settimeout으로 한다.
      setTimeout(() => {
        commit("MUT_ADD_TODO", value);
      }, 2000);
    },
    ACT_TOGGLE_TODO({ commit }, payload) {
      // axios 대신  settimeout으로 한다.
      setTimeout(() => {
        commit("MUT_TOGGLE_TODO", payload);
      }, 500);
    },
    ACT_DELETE_TODO({ commit }, id) {
      // axios 대신  settimeout으로 한다.
      setTimeout(() => {
        commit("MUT_DELETE_TODO", id);
      }, 500);
    },
    ACT_USERS({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        commit("MUT_USERS", res.data);
      });
    },
  },
  modules: {
    // MOD_SAMPLE: "sampleModules",
  },
});
