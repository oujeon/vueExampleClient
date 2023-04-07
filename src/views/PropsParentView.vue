<template>
  <div><Props-Child-View v-bind:proTitle="datTitle" /></div>
</template>
<script>
import PropsChildView from "./PropsChildView.vue";

export default {
  // 1. props
  props: "",
  // 2. name
  name: "PropsParentView",
  // 3. data
  data() {
    return {
      datTitle: "Props Parent View",
    };
  },
  // 4. components
  components: {
    "Props-Child-View": PropsChildView,
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
  watch: {
    datOne() {
      this.datTwo = "No";
    },
  },
  // 7. computed
  computed: {},
  // 8. methods
  methods: {
    metWatch() {
      this.datOne = "Good bye World";
    },
  },
};
</script>
<style scoped></style>
