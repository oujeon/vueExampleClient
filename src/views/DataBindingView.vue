<template>
  <div>
    <input type="text" value="hello World" /><br /><br />
    <input type="text" v-bind:value="datInput" /><br /><br />
    <input v-bind:type="datNumber" /><br /><br />
    <input :type="datText" :value="datInput" /><br /><br />
    <a :href="datLink">다음</a><br /><br />
    <a :href="metLink()">다음</a><br /><br />
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "DataBindingView",
  // 2. data
  data() {
    return {
      datInput: "hello World",
      datNumber: "number",
      datText: "text",
      datLink: "http://www.daum.net",
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
    metLink: function () {
      return this.datLink;
    },
  },
};
</script>
<style scoped></style>
