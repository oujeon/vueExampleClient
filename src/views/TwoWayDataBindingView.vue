<template>
  <div>
    <input type="text" value="hello World" @keyup="metUpdate" /><br /><br />
    {{ datText1 }}<br /><br />
    <input type="text" v-model="datText2" /><br /><br />
    {{ datText2 }}
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "TwoWayDataBindingView",
  // 2. data
  data() {
    return {
      datText1: "hello World",
      datText2: "hello World",
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
    metUpdate: function (event) {
      console.log(event.target.value);
      this.datText1 = event.target.value;
    },
  },
};
</script>
<style scoped></style>
