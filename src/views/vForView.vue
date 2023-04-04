<template>
  <div>
    <div v-for="person of people" v-bind:key="person.age">
      {{ person.name }}-{{ person.age }}
    </div>
    <hr />
    <div v-for="person in people" v-bind:key="person.name">
      {{ person.name }}-{{ person.age }}
    </div>
    <hr />
    <div v-for="(person, index) in people" v-bind:key="index">
      {{ person.name }}-{{ person.age }}-{{ index }}
    </div>
    <hr />
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "VIfShowView",
  // 2. data
  data() {
    return {
      people: [
        { name: "홍길동", age: 28 },
        { name: "이순신", age: 58 },
        { name: "강감찬", age: 78 },
        { name: "유관순", age: 18 },
      ],
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
    metSample() {},
  },
};
</script>
<style scoped>
.red {
  color: red;
}

.bold {
  font-weight: bold;
}
</style>
