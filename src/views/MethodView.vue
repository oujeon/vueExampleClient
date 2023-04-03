<template>
  <div>
    <h1>{{ datParent.datName }}</h1>
    <h1>{{ metSample1() }}</h1>
    <h1>{{ metSample2() }}</h1>
    <h1>{{ metSample3("홍길동") }}</h1>
    <h1>{{ metSample4() }}</h1>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "VariableView",
  // 2. data
  data() {
    return {
      datParent: {
        datName: "Good bye world !!!",
      },
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
    metSample1: function () {
      return this.datParent.datName + "입니다.";
    },
    metSample2: function () {
      return this.metSample1();
    },
    metSample3: function (parTemp) {
      return parTemp + "입니다.";
    },
    metSample4() {
      return "이순신 입니다.";
    },
  },
};
</script>
<style scoped></style>
