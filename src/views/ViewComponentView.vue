<template>
  <div>
    <hr />
    <GlobalComponents />
    <LocalComponents />
    <hr />
  </div>
</template>
<script>
//
import LocalComponents from "@/components/LocalComponents.vue";

export default {
  // 1. name
  name: "ViewComponentView",
  // 2. data
  data() {
    return {};
  },
  // 3. components
  components: {
    LocalComponents: LocalComponents,
  },
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
    metSample() {},
  },
};
</script>
<style scoped></style>
