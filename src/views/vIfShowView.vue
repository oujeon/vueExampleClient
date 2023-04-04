<template>
  <div>
    <div v-if="isVif">Hello1 World</div>
    <div v-else-if="isElseIf">Hello2 World</div>
    <div v-else>Hello3 World</div>
    <br /><br />
    <div v-show="isShow">Good bye World</div>
    <br /><br />
    <button @click="metTrueFalse">Update True False</button>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "VIfShowView",
  // 2. data
  data() {
    return {
      isVif: false,
      isElseIf: false,
      isShow: false,
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
    metTrueFalse() {
      this.isVif = !this.isVif;
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style scoped>
.red {
  color: red;
}

.bold {
  font-weight: bold;
}
</style>
