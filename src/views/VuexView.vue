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
  </div>
</template>
<script>
//
import VuexList from "./VuexListView.vue";
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
    };
  },
  // 4. components_
  components: {
    "Vuex-List": VuexList,
  },
  // 5. Lifecycle
  beforeCreate() {},
  created() {},
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
    comCnt() {
      return this.$store.state.staToDo.length;
    },
  },
  // 8. methods
  methods: {
    metKeyUpEnterInput(e) {
      this.$store.commit("MUT_ADD_TODO", e.target.value);
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
  },
};
</script>
<style scoped></style>
