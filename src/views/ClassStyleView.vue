<template>
  <div>
    <div :class="{ red: isRed, bold: isBold }">Hello World</div>
    <br /><br />
    <button @click="metUpdateClassStyle">Update Class Style</button>
    <br /><br />
    <div :class="{ red: isRed, 'font-bold': isBold }">Good Bye World</div>

    <br /><br />
    <div :style="{ color: color, fontSize: size }">Hi World</div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "ClassStyleView",
  // 2. data
  data() {
    return {
      isRed: false,
      isBold: false,
      color: "red",
      size: "30px",
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
    metUpdateClassStyle() {
      this.isBold = !this.isbold;
      this.isRed = !this.isRed;
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
