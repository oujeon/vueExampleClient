<template>
  <div class="mb-2 d-flex">
    <div>
      <input
        type="checkbox"
        :checked="proToDo.checked"
        @change="metChangeCheckBox"
      />
    </div>
    <span
      class="ms-2 flex-grow-1"
      :style="this.proToDo.checked ? 'font-size: 24px' : ''"
      :class="this.proToDo.checked ? 'text-decoration-line-through' : ''"
      >{{ proToDo.text }}
    </span>
    <button class="btn btn-danger btn-sm" @click="metClickDelete">
      Delete
    </button>
    {{ proToDo }}
  </div>
</template>
<script>
//
export default {
  // 1. props
  props: {
    proToDo: {
      type: Object,
      required: false,
    },
  },
  // 2. name
  name: "VuexListView",
  // 3. data
  data() {
    return {};
  },
  // 4. components_
  components: {},
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
      alert(e.target.value);
    },
    metChangeCheckBox(e) {
      this.$store.commit("MUT_TOGGLE_TODO", {
        id: this.proToDo.id,
        checked: e.target.checked,
      });
    },
    metClickDelete() {
      this.$store.commit("MUT_DELETE_TODO", this.proToDo.id);
    },
  },
};
</script>
<style scoped></style>
