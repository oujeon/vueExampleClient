<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/variable">변수</router-link> |
      <router-link to="/method">Method</router-link> |
      <router-link to="/oneWayDataBinding">One Way Data Binding</router-link> |
      <router-link to="/eventView">Event</router-link> |
      <router-link to="/twoWayDataBinding">Two Way DataBinding</router-link> |
      <router-link to="/computed">Computed</router-link> |
      <router-link to="/watch">Watch</router-link> |
      <router-link to="/classStyle">Class Style</router-link> |
      <router-link to="/vIfShow">v-if show</router-link> |
      <router-link to="/vFor">v-for</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
