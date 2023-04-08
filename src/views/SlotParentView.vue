<template>
  <div>
    SlotParentView
    <Slot-Parent-View>
      <template>
        <div>
          <h1>Header1</h1>
        </div>
      </template>
      <template v-slot:header2>
        <div>
          <h1>Header2</h1>
        </div>
      </template>
      <template #header3>
        <div>
          <h1>Header3</h1>
        </div>
      </template>
      <template #header4="props">
        <div>
          <h1>Header4 {{ props.proTemp }}</h1>
        </div>
      </template>
      <template #header5="{ proTemp }">
        <div>
          <h1>Header4 {{ proTemp }}</h1>
        </div>
      </template>
    </Slot-Parent-View>
  </div>
</template>
<script>
import SlotParentView from "./SlotChildView.vue";
//
export default {
  // 1. props
  props: "",
  // 2. name
  name: "SlotParentView",
  // 3. data
  data() {
    return {};
  },
  // 4. components_
  components: { "Slot-Parent-View": SlotParentView },
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
