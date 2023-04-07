<template>
  <div>
    <Emit-Child-View
      v-bind:proTitle="datTitle"
      @emiChildValue1="metChildValue"
      @emiChildValue2="datChildValue2 = $event.target.value"
    />
    {{ datChildValue1 }}<br /><br />
    {{ datChildValue2 }}
  </div>
</template>
<script>
import EmitChildView from "./EmitChildView.vue";

export default {
  // 1. props
  props: "",
  // 2. name
  name: "EmitParentView",
  // 3. data
  data() {
    return {
      datTitle: "Props Parent View",
      datChildValue1: "",
      datChildValue2: "",
    };
  },
  // 4. components
  components: {
    "Emit-Child-View": EmitChildView,
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
  watch: {},
  // 7. computed
  computed: {},
  // 8. methods
  methods: {
    metChildValue(value) {
      this.datChildValue1 = value;
    },
  },
};
</script>
<style scoped></style>
