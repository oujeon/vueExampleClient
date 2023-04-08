<template>
  <div class="container" style="border: 1px solid black">
    <h1 class="text-center">Todo app</h1>
    <input
      type="text"
      class="w-100 p-3"
      placeholder="Type todo"
      @keyup.enter="metKeyUpEnterInput"
      v-model="datTemp"
    />
    <hr />
    <ToDo-List
      v-for="todo in datToDo"
      :key="todo.id"
      :proToDo="todo"
      @emiTodo="metEmiTodo"
      @emiDelete="metEmiDelete"
    />
  </div>
</template>
<script>
//
import ToDoList from "./ToDoListView.vue";
//
export default {
  // 1. props
  props: "",
  // 2. name
  name: "ToDoView",
  // 3. data
  data() {
    return {
      datTemp: "",
      datToDo: [
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
    };
  },
  // 4. components_
  components: {
    "ToDo-List": ToDoList,
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
  computed: {},
  // 8. methods
  methods: {
    metKeyUpEnterInput(e) {
      this.datToDo.push({
        id: Math.random(),
        text: e.target.value,
        checked: false,
      });
      this.datTemp = "";
    },
    metEmiTodo({ id, checked }) {
      const index = this.datToDo.findIndex((item) => {
        return item.id === id;
      });
      this.datToDo[index].checked = checked;
    },
    metEmiDelete(id) {
      // const index = this.datToDo.findIndex((item) => {
      //   return item.id === id;
      // });
      // this.datToDo.splice(index, 1);
      this.datToDo = this.datToDo.filter((item) => item.id !== id);
    },
  },
};
</script>
<style scoped></style>
