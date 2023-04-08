<template>
  <div>
    SlotChildView1
    <slot></slot>
    SlotChildView2
    <slot name="header2"></slot>
    SlotChildView3
    <slot name="header3"></slot>
    SlotChildView4
    <slot name="header4" :proTemp="datTemp"></slot>
    SlotChildView5
    <slot name="header5" :proTemp="datTemp"></slot>
  </div>
</template>
<script>
export default {
  // 1. props
  props: "",
  // 2. name
  name: "SlotChildView",
  // 3. data
  data() {
    return { datTemp: "Hello World" };
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
    metSample() {},
  },
};
</script>
<style scoped></style>
