<template>
  <div>
    <h1>{{ datName }}</h1>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "VariableView",
  // 2. data
  data() {
    return {
      datName: "Hello world !!!",
    };
  },
  // 3. components
  components: {},
  // 4. Lifecycle
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  // 5. watch
  watch: {},
  // 6. computed
  computed: {},
  // 7. methods
  methods: {
    sample: function () {},
  },
};
</script>
<style scoped></style>
