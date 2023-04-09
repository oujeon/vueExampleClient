<template>
  <div class="container" style="border: 1px solid black">
    <h1 class="text-center">Todo app</h1>
    <h3 class="text-center">{{ comCnt }}</h3>
    <input
      type="text"
      class="w-100 p-3"
      placeholder="Type todo"
      @keyup.enter="metKeyUpEnterInput"
      v-model="datTemp"
    />
    <hr />
    <Vuex-List
      v-for="todo in this.$store.state.staToDo"
      :key="todo.id"
      :proToDo="todo"
    />
    <div v-for="user in comUsers" :key="user.name">
      {{ user.name }}
    </div>
  </div>
</template>
<script>
//
import VuexList from "./VuexListView.vue";
import { mapState, mapActions } from "vuex";
//
export default {
  // 1. props
  props: "",
  // 2. name
  name: "VuexView",
  // 3. data
  data() {
    return {
      datTemp: "",
      users: [],
    };
  },
  // 4. components_
  components: {
    "Vuex-List": VuexList,
  },
  // 5. Lifecycle
  beforeCreate() {},
  created() {
    this.metUsers();
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  // 6. watch
  watch: {},
  // 7. computed
  computed: {
    ...mapState(["todos"]),
    comCnt() {
      //return this.$store.state.staToDo.length; // store 직접 접근
      return this.$store.getters.GET_CNT; // getters 을 이용해서 여러군에서 접근
    },
    comUsers() {
      return this.$store.state.users;
    },
  },
  // 8. methods
  methods: {
    ...mapActions(["ACT_USERS"]), // 일괄실행 실패
    metKeyUpEnterInput(e) {
      // this.$store.commit("MUT_ADD_TODO", e.target.value); // mutations을 직접 사용시
      this.$store.dispatch("ACT_ADD_TODO", e.target.value);
      this.datTemp = "";
    },
    //metEmiTodo({ id, checked }) {
    // const index = this.$store.state.staToDo.findIndex((item) => {
    //   return item.id === id;
    // });
    // this.$store.state.staToDo[index].checked = checked;
    //},
    //metEmiDelete(id) {
    // const index = this.datToDo.findIndex((item) => {
    //   return item.id === id;
    // });
    // this.datToDo.splice(index, 1);
    // this.datToDo = this.datToDo.filter((item) => item.id !== id);
    //},
    metUsers() {
      this.$store.dispatch("ACT_USERS"); // 단일 실행
    },
  },
};
</script>
<style scoped></style>
