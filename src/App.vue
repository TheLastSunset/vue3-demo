<template>
  <h1>Hello App!</h1>

  <p>
    <router-link
      class="router-link"
      to="/"
    >
      hello world
    </router-link>
    <router-link
      class="router-link"
      to="/tool1"
    >
      tool1
    </router-link>
  </p>

  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link + .router-link {
  padding-left: 10px;
}
</style>
