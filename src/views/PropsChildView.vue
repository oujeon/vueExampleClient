<template>
  <div>{{ proTitle }}</div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. props
  props: {
    proTitle: { type: String, required: false, default: "" },
  },
  // 2. name
  name: "PropsChildView",
  // 3. data
  data() {
    return {};
  },
  // 4. components
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
