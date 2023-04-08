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
      <router-link to="/viewComponent">View Component</router-link> |
      <router-link to="/propsParent">Props Parent</router-link> |
      <router-link to="/emitParent">Emit Parent</router-link> |
      <router-link to="/slotParent">Slot</router-link> |
      <router-link to="/toDo">ToDo</router-link> |
      <router-link to="/vuex">Vuex</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style></style>
