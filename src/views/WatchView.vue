<template>
  <div>
    {{ datOne }}<br /><br />
    <button @click="metWatch">watch</button><br /><br />
    {{ datTwo }}<br /><br />
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "WatchView",
  // 2. data
  data() {
    return {
      datOne: "hello world",
      datTwo: "Yes",
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
  watch: {
    datOne() {
      this.datTwo = "No";
    },
  },
  // 6. computed
  computed: {},
  // 7. methods
  methods: {
    metWatch() {
      this.datOne = "Good bye World";
    },
  },
};
</script>
<style scoped></style>
