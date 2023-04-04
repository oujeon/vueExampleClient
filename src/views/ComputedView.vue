<template>
  <div>
    {{ datText }}<br /><br />
    {{ comText }}<br /><br />
    {{ comText }}<br /><br />
    {{ comText }}<br /><br />
    {{ metText() }}<br /><br />
    {{ metText() }}<br /><br />
    {{ metText() }}<br /><br />
    <button @click="metUpdateComputed">Update Computed</button>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "ComputedView",
  // 2. data
  data() {
    return {
      datText: "헬로우",
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
  computed: {
    comText() {
      return this.datText.split("").reverse().join("");
    },
  },
  // 7. methods
  methods: {
    metUpdateComputed() {
      this.datText = "굳바이";
    },
    metText() {
      return this.datText.split("").reverse().join("");
    },
  },
};
</script>
<style scoped></style>
