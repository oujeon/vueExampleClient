<template>
  <div>
    {{ proTitle }}<br /><br />
    <input type="text" @input="metInputInput1" /><br /><br />
    <input type="text" @input="$emit('emiChildValue2', $event)" />
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. props
  props: {
    proTitle: { type: String, required: false, default: "" },
  },
  // 2. name
  name: "EmitChildView",
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
  watch: {},
  // 7. computed
  computed: {},
  // 8. methods
  methods: {
    metInputInput1(event) {
      this.$emit("emiChildValue1", event.target.value);
    },
  },
};
</script>
<style scoped></style>
