import Vue from "vue";
import Vuex from "vuex";

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
    ],
  },
  getters: {},
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
  },
  actions: {},
  modules: {},
});
