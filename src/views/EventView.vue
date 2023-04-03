<template>
  <div>
    <button onClick="alert('hello world')">이벤트1</button><br /><br />
    <button v-on:click="metSample1">이벤트2</button><br /><br />

    {{ year }}<br /><br />
    <button v-on:click="metPlus">더하기</button><br /><br />
    <button v-on:click="metMinus">뺘기</button><br /><br />
    <form v-on:submit.prevent="metSubmit">
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "EventView",
  // 2. data
  data() {
    return {
      year: 2023,
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
      alert("Hello World");
    },
    metSample2: function () {
      alert("Hello World");
    },
    metPlus: function () {
      this.year++;
    },
    metMinus: function () {
      this.year--;
    },
    metSubmit: function () {
      alert("submit");
      console.log("submit!!!");
    },
  },
};
</script>
<style scoped></style>
